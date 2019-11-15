import { GraphQLString, GraphQLNonNull } from 'graphql'

import { UserType } from '../types'
import { Users } from '../../models'

export const createFirstAdmin = {
  type: UserType,
  description: 'Зарегистрировать первого администратора',
  args: {
    first_name: {
      name: 'first_name',
      type: new GraphQLNonNull(GraphQLString),
    },
    last_name: {
      name: 'last_name',
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      name: 'email',
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      name: 'password',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (rootVal, args, { user }) => {
    try {
      let hasAdmin = await Users.find({ role: 'admin' }).countDocuments(),
        data = Object.assign(args, {
          connect: 0,
          role: 'admin',
        }),
        user = null

      if (hasAdmin) throw new Error('Администратор уже был зарегистрирован')

      user = await new Users(data).save()

      return user
    } catch (err) {
      throw err
    }
  },
}
