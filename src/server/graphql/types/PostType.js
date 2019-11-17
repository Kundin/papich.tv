import { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLList } from 'graphql'

import { UserType } from '../types'

export const UserType = new GraphQLObjectType({
  name: 'Post',
  description: 'Пост',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: ' Уникальный идентификатор',
    },

    author: {
      type: new GraphQLNonNull(UserType),
      description: 'Автор',
    },

    text: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Текст',
    },

    likes: {
      type: new GraphQLList(UserType),
      description: 'Пользователи, лайкнувшие этот пост',
    },

    comments: {
      type: new GraphQLList(UserType),
      description: 'Пользователи, написавшие комментарий к этому посту',
    },

    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Дата создания',
      resolve: (post) => post.createdAt.toString(),
    },

    updatedAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Дата последнего обновления',
      resolve: (post) => post.updatedAt.toString(),
    },
  }),
})
