import { GraphQLList, GraphQLString } from 'graphql'

import { PostType } from '../types'
import { Posts } from '../../models'

export const posts = {
  type: new GraphQLList(PostType),
  description: 'Получить посты',
  args: {
    type: {
      name: 'type',
      type: GraphQLString,
    },
  },
  resolve: async (obj, { type }, { user }, info) => {
    const posts = await Posts.find({ type, attachments: { $ne: [] } })
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

    return posts
  },
}
