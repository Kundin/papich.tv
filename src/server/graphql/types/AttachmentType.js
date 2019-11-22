import {
  GraphQLID,
  GraphQLString,
  GraphQLUnionType,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql'

import { PhotoAttachmentType, YoutubeAttachmentType } from '../types'

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
        types: [PhotoAttachmentType, YoutubeAttachmentType],
        resolveType(value) {
          // Это видео на ютубе
          if (!value.path && value.src) return 'YoutubeAttachment'

          // Это фотография
          if (value.path && value.src) return 'PhotoAttachment'

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
