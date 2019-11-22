// Вложение к посту – видео на youtube

import { Schema } from 'mongoose'

export const YoutubeAttachmentsSchema = new Schema(
  {
    // Полный адрес видео
    src: {
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
