// Схема пользователя

import { Schema } from 'mongoose'

export const UsersSchema = new Schema(
  {
    // Имя
    first_name: {
      type: String,
      required: true,
      trim: true,
    },

    // Фамилия
    last_name: {
      type: String,
      required: true,
      trim: true,
    },

    // Пол
    // 0 - не указан
    // 1 - мужской
    // 2 - женский
    sex: {
      type: Number,
      required: true,
      min: 0,
      max: 2,
      default: 0,
    },

    // Электронная почта
    email: {
      type: String,
      trim: true,
    },

    // Полный URL-адрес до аватарки
    avatar: {
      type: String,
      trim: true,
    },

    // Хэшированный пароль
    hashPassword: {
      type: String,
    },

    // Соль для хэширования
    salt: {
      type: String,
    },
  },
  {
    timestamps: true,

    toJSON: {
      virtuals: true,
    },
  },
)
