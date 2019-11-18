import {
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql'

import { UserType, PostCountersType } from '../types'

export const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'Пост',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: ' Уникальный идентификатор',
    },

    type: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Тип поста',
    },

    author: {
      type: new GraphQLNonNull(UserType),
      description: 'Автор',
    },

    text: {
      type: GraphQLString,
      description: 'Текст',
    },

    counters: {
      type: new GraphQLNonNull(PostCountersType),
      description: 'Счётчики',
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
