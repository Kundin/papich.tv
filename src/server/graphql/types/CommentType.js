import { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLNonNull } from 'graphql'

import { UserType, PostType } from '../types'

export const CommentType = new GraphQLObjectType({
  name: 'Comment',
  description: 'Комментарий',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: ' Уникальный идентификатор',
    },

    post: {
      type: new GraphQLNonNull(PostType),
      description: 'Пост к которому написан комментарий',
    },

    author: {
      type: new GraphQLNonNull(UserType),
      description: 'Автор',
    },

    text: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Текст',
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
