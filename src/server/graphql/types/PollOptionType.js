import { GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLList } from 'graphql'

import { UserType } from './UserType'

export const PollOptionType = new GraphQLObjectType({
  name: 'PollOption',
  description: 'Вариант ответа в опросе',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Название',
    },

    votes: {
      type: new GraphQLList(UserType),
      description: 'Проголосовавшие за этот вариант',
    },
  }),
})
