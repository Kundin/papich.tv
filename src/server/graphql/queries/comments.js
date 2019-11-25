import { GraphQLID, GraphQLList } from 'graphql'
import validator from 'validator'

import { CommentType } from '../types'
import { Comments } from '../../models'

export const comments = {
  type: new GraphQLList(CommentType),
  description: 'Получить комментарии',
  args: {
    postId: {
      name: 'postId',
      type: GraphQLID,
    },
  },
  resolve: async (obj, { postId }) => {
    if (!validator.isMongoId(postId)) {
      return null
    }

    const comments = await Comments.find({ post: postId })
      .sort({ createdAt: 1 }) // Сначала старые
      .populate('post')
      .populate('author')
      .exec()

    return comments
  },
}
