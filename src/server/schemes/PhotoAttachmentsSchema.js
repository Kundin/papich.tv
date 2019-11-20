// Вложение к посту – фотография

import { Schema } from 'mongoose'

export const PhotoAttachmentsSchema = new Schema(
  {
    // Полный путь к файлу в файловой системе
    path: {
      type: String,
      required: true,
    },

    // Относительный адрес фотографии
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
