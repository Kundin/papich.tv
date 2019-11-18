import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql'

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
  resolve: async (obj, { type }, context, info) => {
    const posts = await Posts.find({ type })
      .populate('author')
      .exec()

    return posts
  },
}
