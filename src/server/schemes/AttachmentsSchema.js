// Вложения к посту

import { Schema } from 'mongoose'

export const AttachmentsSchema = new Schema(
  {
    // Тип
    // photo - фотография
    type: {
      type: String,
      required: true,
      enum: ['photo', 'youtube'],
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
      enum: ['PhotoAttachments', 'YouTubeAttachments'],
    },
  },
  {
    timestamps: true,

    toJSON: {
      virtuals: true,
    },
  },
)
