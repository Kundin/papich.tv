// Вложения к посту

import { Schema } from 'mongoose'

export const AttachmentsSchema = new Schema(
  {
    // Тип
    // photo - фотография
    // youtube - видео с ютуба
    // poll - опрос
    type: {
      type: String,
      required: true,
      enum: ['photo', 'youtube', 'poll'],
    },

    // Информация о вложении
    body: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: 'onModel',
    },

    // Модель вложения
    onModel: {
      type: String,
      required: true,
      enum: ['PhotoAttachments', 'YouTubeAttachments', 'PollAttachments'],
    },
  },
  {
    timestamps: true,

    toJSON: {
      virtuals: true,
    },
  },
)
