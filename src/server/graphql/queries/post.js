import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql'
import validator from 'validator'

import { PostType } from '../types'
import { Posts } from '../../models'

export const post = {
  type: PostType,
  description: 'Получить пост',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (obj, { id }, { user }, info) => {
    if (!validator.isMongoId(id)) {
      return null
    }

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
