// Вложение к посту – видео на youtube

import { Schema } from 'mongoose'

export const YouTubeAttachmentsSchema = new Schema(
  {
    // Полный адрес к видео
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,

    toJSON: {
      virtuals: true,
    },
  },
)
