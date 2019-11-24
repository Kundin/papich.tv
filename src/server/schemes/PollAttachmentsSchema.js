// Вложение к посту – опрос

import { Schema } from 'mongoose'

export const PollAttachmentsSchema = new Schema(
  {
    // Варианты ответа
    options: [
      {
        // Название
        name: {
          type: String,
        },

        // Проголосовавшие за этот вариант
        votes: [
          {
            type: Schema.Types.ObjectId,
            ref: 'Users',
          },
        ],
      },
    ],

    // Все проголосовавшие
    votes: [
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
