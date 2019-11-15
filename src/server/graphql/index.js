import { GraphQLObjectType, GraphQLSchema } from 'graphql'

import * as queries from './queries'
import * as mutations from './mutations'

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'Доступные запросы',
    fields: queries,
  }),

  mutation: new GraphQLObjectType({
    name: 'Mutation',
    description: 'Доступные мутации',
    fields: mutations,
  }),
})
