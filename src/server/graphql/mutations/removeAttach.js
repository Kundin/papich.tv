import fs from 'fs'
import { GraphQLNonNull, GraphQLID } from 'graphql'

import { AttachmentType } from '../types'
import { Attachments, PhotoAttachments, YouTubeAttachments } from '../../models'
import { useAdminOrPapich } from '../hooks'

export const removeAttach = {
  type: AttachmentType,
  description: 'Удалить вложение',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: useAdminOrPapich(async (rootVal, { id }) => {
    const attachment = await Attachments.findById(id)
      .populate('body')
      .exec()

    if (!attachment) return null

    // Удаляем основной документ
    await Attachments.deleteOne({ _id: attachment._id })

    // Удаляем вложенный документ
    switch (attachment.type) {
      case 'photo':
        fs.unlink(attachment.body.path, async (err) => {
          if (err) throw err

          await PhotoAttachments.deleteOne({ _id: attachment.body._id })
        })
        break

      case 'youtube':
        await YouTubeAttachments.deleteOne({ _id: attachment.body._id })
        break

      default:
        break
    }

    return attachment
  }),
}
