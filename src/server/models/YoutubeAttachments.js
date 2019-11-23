// Модель вложений с типом видео на ютубе

import { model } from 'mongoose'

import { YouTubeAttachmentsSchema } from '../schemes'

/* ВИРТУАЛЬНЫЕ ПОЛЯ */

/* МЕТОДЫ ДОКУМЕНТА */

/* МЕТОДЫ МОДЕЛИ */

export const YouTubeAttachments = model('YouTubeAttachments', YouTubeAttachmentsSchema)
