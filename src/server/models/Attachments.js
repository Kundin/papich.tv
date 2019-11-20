// Модель вложений

import { model } from 'mongoose'

import { AttachmentsSchema } from '../schemes'

/* ВИРТУАЛЬНЫЕ ПОЛЯ */

/* МЕТОДЫ ДОКУМЕНТА */

/* МЕТОДЫ МОДЕЛИ */

export const Attachments = model('Attachments', AttachmentsSchema)
