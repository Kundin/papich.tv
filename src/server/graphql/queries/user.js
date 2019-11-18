import { GraphQLInt } from 'graphql'

import { UserType } from '../types'
import { Users } from '../../models'

export const user = {
  type: UserType,
  description: 'Получить пользователя',
  args: {
    vkId: {
      name: 'vkId',
      type: GraphQLInt,
    },
  },
  resolve: async (obj, args, context, info) => {
    const { vkId } = args
    const query = {}

    if (vkId) query.vkId = vkId

    return await Users.findOne(query).exec()
  },
}
