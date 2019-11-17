// Модель поста

import { model } from 'mongoose'

import { PostsSchema } from '../schemes'

/* ВИРТУАЛЬНЫЕ ПОЛЯ */

/* МЕТОДЫ ДОКУМЕНТА */

/* МЕТОДЫ МОДЕЛИ */

export const Posts = model('Posts', PostsSchema)
