// Вложение к посту – опрос

import { Schema } from 'mongoose'

export const PollAttachmentsSchema = new Schema(
  {
    // Заголовок
    title: {
      type: String,
      required: true,
    },

    // Варианты ответа
    options: [
      {
        // Название
        name: {
          type: String,
        },

        // Проголосовавшие люди
        votes: [
          {
            type: Schema.Types.ObjectId,
            ref: 'Users',
          },
        ],
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
