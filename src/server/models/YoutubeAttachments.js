// Модель вложений с типом видео на ютубе

import { model } from 'mongoose'

import { YoutubeAttachmentsSchema } from '../schemes'

/* ВИРТУАЛЬНЫЕ ПОЛЯ */

/* МЕТОДЫ ДОКУМЕНТА */

/* МЕТОДЫ МОДЕЛИ */

export const YoutubeAttachments = model('YoutubeAttachments', YoutubeAttachmentsSchema)
