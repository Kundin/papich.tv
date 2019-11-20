// Модель вложений с типом фото

import { model } from 'mongoose'

import { PhotoAttachmentsSchema } from '../schemes'

/* ВИРТУАЛЬНЫЕ ПОЛЯ */

/* МЕТОДЫ ДОКУМЕНТА */

/* МЕТОДЫ МОДЕЛИ */

export const PhotoAttachments = model('PhotoAttachments', PhotoAttachmentsSchema)
