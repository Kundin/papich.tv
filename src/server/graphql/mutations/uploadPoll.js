import { GraphQLString, GraphQLNonNull, GraphQLList } from 'graphql'

import { AttachmentType } from '../types'
import { Attachments, PollAttachments } from '../../models'

export const uploadPoll = {
  type: AttachmentType,
  description: 'Загрузить опрос',
  args: {
    title: {
      name: 'title',
      type: new GraphQLNonNull(GraphQLString),
    },
    options: {
      name: 'options',
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
    },
  },
  resolve: async (rootVal, { title, options }, { user }) => {
    // Создаём новое вложение нужного типа
    const pollAttachment = await new PollAttachments({
      title,
      options,
    }).save()

    // Создаём общее вложение
    const attachment = await new Attachments({
      type: 'poll',
      body: pollAttachment,
      onModel: 'PollAttachments',
    }).save()

    return attachment
  },
}
