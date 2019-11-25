import { GraphQLString, GraphQLNonNull } from 'graphql'

import { AttachmentType } from '../types'
import { Attachments, YouTubeAttachments } from '../../models'
import { useAdminOrPapich } from '../hooks'

export const uploadYouTube = {
  type: AttachmentType,
  description: 'Загрузить видео с ютуба',
  args: {
    url: {
      name: 'url',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: useAdminOrPapich(async (rootVal, { url }) => {
    // Создаём новое вложение нужного типа
    const youtubeAttachment = await new YouTubeAttachments({
      url,
    }).save()

    // Создаём общее вложение
    const attachment = await new Attachments({
      type: 'youtube',
      body: youtubeAttachment,
      onModel: 'YouTubeAttachments',
    }).save()

    return attachment
  }),
}
