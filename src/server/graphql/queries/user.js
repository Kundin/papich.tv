import { GraphQLInt, GraphQLNonNull } from 'graphql'

import { UserType } from '../types'
import { Users } from '../../models'

export const user = {
  type: UserType,
  description: 'Получить пользователя',
  args: {
    vkId: {
      name: 'vkId',
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: async (obj, { vkId }, context, info) => {
    return await Users.findOne({ vkId }).exec()
  },
}
