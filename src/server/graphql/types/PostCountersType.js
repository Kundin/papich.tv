import { GraphQLInt, GraphQLObjectType, GraphQLNonNull } from 'graphql'

export const PostCountersType = new GraphQLObjectType({
  name: 'PostCounters',
  description: 'Счётчики у поста',
  fields: () => ({
    likes: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Количество лайков',
    },
    comments: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Количество комментариев',
    },
  }),
})
