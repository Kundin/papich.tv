import path from 'path'
import fs from 'fs'
import shortid from 'shortid'
import { GraphQLID, GraphQLString, GraphQLNonNull } from 'graphql'
import { GraphQLUpload } from 'apollo-server'

import { config } from '../../../config'
import { AttachmentType } from '../types'
import { Attachments, PhotoAttachments } from '../../models'

export const uploadFile = {
  type: AttachmentType,
  description: 'Загрузить вложение',
  args: {
    file: {
      name: 'file',
      type: new GraphQLNonNull(GraphQLUpload),
    },
  },
  resolve: async (rootVal, { file }, { user }) => {
    const fullPath = await saveFile(file)
    const src = `/static${fullPath.split('/public')[1]}`

    // Создаём новое вложение нужного типа
    const photoAttachment = await new PhotoAttachments({
      path: fullPath,
      src,
    }).save()

    // Создаём общее вложение
    const attachment = await new Attachments({
      type: 'photo',
      body: photoAttachment,
      onModel: 'PhotoAttachments',
    }).save()

    return attachment
  },
}

// Сохранить файл
async function saveFile(file) {
  const { createReadStream, filename, mimetype, encoding } = await file

  const name = shortid.generate()
  const ext = path.extname(filename)
  const fullPath = `${config.tmpPath}/${name}${ext}`

  const readStream = createReadStream()
  const writeStream = fs.createWriteStream(fullPath)

  return new Promise((resolve, reject) => {
    readStream.pipe(writeStream)

    writeStream.on('error', reject).on('finish', () => {
      resolve(fullPath)
    })
  })
}
