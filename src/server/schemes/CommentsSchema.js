// Схема комментария

import { Schema } from 'mongoose'

export const CommentsSchema = new Schema(
  {
    // Пост к которому написан комментарий
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Posts',
      required: true,
    },

    // Автор
    author: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },

    // Текст
    text: {
      type: String,
      trim: true,
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
