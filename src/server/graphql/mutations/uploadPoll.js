import { GraphQLString, GraphQLNonNull, GraphQLList } from 'graphql'

import { AttachmentType } from '../types'
import { Attachments, PollAttachments } from '../../models'
import { useAdminOrPapich } from '../hooks'

export const uploadPoll = {
  type: AttachmentType,
  description: 'Загрузить опрос',
  args: {
    options: {
      name: 'options',
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
    },
  },
  resolve: useAdminOrPapich(async (rootVal, { options }) => {
    // Создаём новое вложение нужного типа
    const pollAttachment = await new PollAttachments({
      options: options.map((name) => ({
        name,
      })),
    }).save()

    // Создаём общее вложение
    const attachment = await new Attachments({
      type: 'poll',
      body: pollAttachment,
      onModel: 'PollAttachments',
    }).save()

    return attachment
  }),
}
