import { GraphQLInt, GraphQLString, GraphQLList, GraphQLBoolean } from 'graphql'

import { UserType } from '../types'
import { Users } from '../../models'

export const users = {
  type: new GraphQLList(UserType),
  description: 'Получить список пользователей',
  args: {
    full_name: {
      name: 'full_name',
      type: GraphQLString,
    },
    sex: {
      name: 'sex',
      type: GraphQLInt,
    },
    skip: {
      name: 'skip',
      type: GraphQLInt,
      description: 'С какой записи начать получение данных',
    },
  },
  resolve: async (obj, args, context, info) => {
    const { id, role, full_name, sex, deactivated } = args
    const query = {}
    const limit = 50
    const skip = args.skip || 0

    if (id) query._id = id
    if (sex) query.sex = sex

    return await Users.find(query)
      .skip(skip)
      .limit(limit)
      .exec()
  },
}
