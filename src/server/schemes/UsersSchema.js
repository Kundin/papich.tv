// Схема пользователя

import { Schema } from 'mongoose'

export const UsersSchema = new Schema(
  {
    // Идентификатор ВКонтакте
    vkId: {
      type: Number,
      required: true,
      unique: true,
    },

    // Имя
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    // Фамилия
    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    // Пол
    // 0 - не указан
    // 1 - женский
    // 2 - мужской
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
