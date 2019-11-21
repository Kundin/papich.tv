import { GraphQLList, GraphQLBoolean } from 'graphql'

import { PostType } from '../types'
import { Posts } from '../../models'

export const posts = {
  type: new GraphQLList(PostType),
  description: 'Получить посты',
  args: {
    isPapich: {
      name: 'isPapich',
      type: GraphQLBoolean,
    },
  },
  resolve: async (obj, { isPapich }, { user }, info) => {
    let posts = await Posts.find()
      .sort({ createdAt: -1 })
      .populate('author')
      .populate({
        path: 'attachments',
        model: 'Attachments',
        populate: {
          path: 'body',
        },
      })
      .exec()

    // Только посты от Папича
    if (isPapich) {
      posts = posts.filter((post) => post.author.isPapich)
    } else {
      posts = posts.filter((post) => !post.author.isPapich)
    }

    return posts
  },
}
