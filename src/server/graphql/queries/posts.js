import { GraphQLList } from 'graphql'

import { PostType } from '../types'
import { Posts } from '../../models'

export const posts = {
  type: new GraphQLList(PostType),
  description: 'Получить посты',
  resolve: async (obj, args, context, info) => {
    return await Posts.find()
      .populate('author')
      .exec()
  },
}
