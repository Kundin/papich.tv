// Схема поста

import { Schema } from 'mongoose'

export const PostsSchema = new Schema(
  {
    // Автор
    author: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },

    // Текст
    text: {
      type: String,
      required: true,
      trim: true,
    },

    // Пользователи, лайкнувшие этот пост
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Users',
      },
    ],

    // Пользователи, написавшие комментарий к этому посту
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Users',
      },
    ],
  },
  {
    timestamps: true,

    toJSON: {
      virtuals: true,
    },
  },
)
