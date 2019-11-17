import { GraphQLID } from 'graphql'

import { PostType } from '../types'
import { Posts } from '../../models'

export const user = {
  type: PostType,
  description: 'Получить посты',
  resolve: async (obj, args, context, info) => {
    return await Posts.find()
      .populate('author')
      .exec()
  },
}
