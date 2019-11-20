import {
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql'

import { UserType, PostCountersType, AttachmentType } from '../types'

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

    hasLike: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Есть ли лайк от текущего пользователя?',
      resolve: (post, args, { user }) => {
        return Boolean(post.likes.find((userId) => userId.toString() === user.id.toString()))
      },
    },

    attachments: {
      type: GraphQLList(AttachmentType),
      description: 'Вложения',
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
