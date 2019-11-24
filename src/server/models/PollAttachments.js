// Модель вложений с типом опрос

import { model } from 'mongoose'

import { PollAttachmentsSchema } from '../schemes'

/* ВИРТУАЛЬНЫЕ ПОЛЯ */

/* МЕТОДЫ ДОКУМЕНТА */

/* МЕТОДЫ МОДЕЛИ */

export const PollAttachments = model('PollAttachments', PollAttachmentsSchema)
