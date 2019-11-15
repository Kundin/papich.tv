import { GraphQLID } from 'graphql'

import { UserType } from '../types'
import { Users } from '../../models'

export const user = {
  type: UserType,
  description: 'Получить пользователя',
  args: {
    id: {
      name: 'id',
      type: GraphQLID,
    },
  },
  resolve: async (obj, args, context, info) => {
    try {
      let { id } = args,
        query = {}

      if (id) query._id = id

      return await Users.findOne(query)
        .populate('vk')
        .exec()
    } catch (err) {
      throw err
    }
  },
}
