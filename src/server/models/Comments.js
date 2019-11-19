// Модель комментария

import { model } from 'mongoose'

import { CommentsSchema } from '../schemes'

/* ВИРТУАЛЬНЫЕ ПОЛЯ */

/* МЕТОДЫ ДОКУМЕНТА */

/* МЕТОДЫ МОДЕЛИ */

export const Comments = model('Comments', CommentsSchema)
