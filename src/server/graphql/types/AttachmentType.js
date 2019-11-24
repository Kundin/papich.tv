import {
  GraphQLID,
  GraphQLString,
  GraphQLUnionType,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql'

import { PhotoAttachmentType, YouTubeAttachmentType, PollAttachmentType } from '../types'

export const AttachmentType = new GraphQLObjectType({
  name: 'Attachment',
  description: 'Вложение',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: ' Уникальный идентификатор',
    },

    type: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Тип вложения:\n\nphoto - фотография',
    },

    body: {
      type: new GraphQLUnionType({
        name: 'AttachmentBody',
        types: [PhotoAttachmentType, YouTubeAttachmentType, PollAttachmentType],
        resolveType(value) {
          // Это видео на ютубе
          if (value.url) return 'YouTubeAttachment'

          // Это фотография
          if (value.path && value.src) return 'PhotoAttachment'

          // Это опрос
          if (value.options) return 'PollAttachment'

          return null
        },
      }),
      description: 'Тело вложения',
    },

    onModel: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Модель вложения',
    },

    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Дата создания',
      resolve: (attachment) => attachment.createdAt.toString(),
    },

    updatedAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Дата последнего обновления',
      resolve: (attachment) => attachment.updatedAt.toString(),
    },
  }),
})
