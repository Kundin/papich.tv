import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql'

import { PostType } from '../types'
import { Posts } from '../../models'

export const post = {
  type: PostType,
  description: 'Получить пост',
  args: {
    id: {
      name: 'id',
      type: GraphQLID,
    },
  },
  resolve: async (obj, { id }, context, info) => {
    const post = await Posts.findById(id)
      .populate('author')
      .exec()

    return post
  },
}
