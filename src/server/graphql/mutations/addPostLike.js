import { GraphQLID, GraphQLNonNull } from 'graphql'

import { PostType } from '../types'
import { Posts } from '../../models'

export const addPostLike = {
  type: PostType,
  description: 'Добавить лайк к посту',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (rootVal, { id }, { user }) => {
    const post = await Posts.findById(id)
    const hasLike = Boolean(post.likes.find((userId) => userId.toString() === user.id.toString()))

    hasLike
      ? // Убрать лайк
        await Posts.findByIdAndUpdate(id, {
          $inc: {
            'counters.likes': -1,
          },
          $pull: {
            likes: user.id,
          },
        })
      : // Добавить лайк
        await Posts.findByIdAndUpdate(id, {
          $inc: {
            'counters.likes': 1,
          },
          $push: {
            likes: user.id,
          },
        })

    return await Posts.findById(id)
      .populate('author')
      .populate({
        path: 'attachments',
        model: 'Attachments',
        populate: {
          path: 'body',
        },
      })
      .exec()
  },
}
