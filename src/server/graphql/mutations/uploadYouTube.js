import { GraphQLString, GraphQLNonNull } from 'graphql'

import { AttachmentType } from '../types'
import { Attachments, YouTubeAttachments } from '../../models'

export const uploadYouTube = {
  type: AttachmentType,
  description: 'Загрузить видео с ютуба',
  args: {
    url: {
      name: 'url',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (rootVal, { url }, { user }) => {
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
  },
}
