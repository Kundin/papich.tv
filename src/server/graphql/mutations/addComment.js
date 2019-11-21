import { GraphQLID, GraphQLString, GraphQLNonNull } from 'graphql'

import { CommentType } from '../types'
import { Posts, Comments } from '../../models'

export const addComment = {
  type: CommentType,
  description: 'Добавить комментарий к посту',
  args: {
    postId: {
      name: 'postId',
      type: new GraphQLNonNull(GraphQLID),
    },
    text: {
      name: 'text',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (rootVal, { postId, text }, { user }) => {
    const post = await Posts.findById(postId)

    // Создаём новый комментарий
    const comment = await new Comments({
      post: post._id,
      author: user._id,
      text,
    }).save()

    // Добавить комментарий к посту
    await Posts.findByIdAndUpdate(post._id, {
      $inc: {
        'counters.comments': 1,
      },
      $push: {
        comments: comment._id,
      },
    })

    return await Comments.findById(comment._id)
      .populate({
        path: 'post',
        model: 'Posts',
        populate: [
          {
            path: 'author',
            model: 'Users',
          },
          {
            path: 'attachments',
            model: 'Attachments',
            populate: {
              path: 'body',
            },
          },
        ],
      })
      .populate('author')
      .exec()
  },
}
