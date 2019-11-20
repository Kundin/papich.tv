// Схема поста

import { Schema } from 'mongoose'

export const PostsSchema = new Schema(
  {
    // Тип поста
    // default - обычный
    // papich - от Папича
    type: {
      type: String,
      required: 'true',
      default: 'default',
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
    },

    // Счётчики
    counters: {
      // Кол-во лайков
      likes: {
        type: Number,
        required: true,
        default: 0,
      },

      // Кол-во комментариев
      comments: {
        type: Number,
        required: true,
        default: 0,
      },
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

    // Вложения
    attachments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Attachments',
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
