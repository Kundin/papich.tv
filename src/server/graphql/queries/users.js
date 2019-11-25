import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

import { UserType } from '../types'
import { Users } from '../../models'

export const users = {
  type: new GraphQLList(UserType),
  description: 'Получить список пользователей',
  args: {
    fullName: {
      name: 'fullName',
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
  resolve: async (obj, { id, sex, skip = 0 }) => {
    const query = {}
    const limit = 50

    if (id) query._id = id
    if (sex) query.sex = sex

    return await Users.find(query)
      .skip(skip)
      .limit(limit)
      .exec()
  },
}
