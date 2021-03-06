import path from 'path'
import { GraphQLID, GraphQLString, GraphQLList } from 'graphql'

import { config } from '../../../config'
import { AFS } from '../../utils'
import { PostType } from '../types'
import { Posts, Attachments, PhotoAttachments } from '../../models'
import { useAdminOrPapich } from '../hooks'

export const createPost = {
  type: PostType,
  description: 'Создать новый пост',
  args: {
    type: {
      name: 'type',
      type: GraphQLString,
    },
    title: {
      name: 'title',
      type: GraphQLString,
    },
    text: {
      name: 'text',
      type: GraphQLString,
    },
    attachmentIds: {
      name: 'attachmentIds',
      type: new GraphQLList(GraphQLID),
    },
  },
  resolve: useAdminOrPapich(
    async (rootVal, { type = 'default', title, text, attachmentIds }, { user }) => {
      if (!title && !text && attachmentIds.length === 0) {
        throw new Error('Нельзя опубликовать пустую запись')
      }

      const photoAttachments = await Attachments.find({
        type: 'photo',
        _id: { $in: attachmentIds },
      })
        .populate('body')
        .exec()

      // Прикреплённые к посту фотографии перемещаем из временной папки в новое место
      await Promise.all(
        photoAttachments.map(async ({ body }) => {
          const basename = path.basename(body.path)
          const newPath = `${config.uploadPath}/${basename}`
          const src = `/static${newPath.split('/public')[1]}`

          await AFS.rename(body.path, newPath)
          await PhotoAttachments.updateOne({ _id: body._id }, { $set: { path: newPath, src } })
        }),
      )

      // Сохраняем новый пост
      const { id } = await new Posts({
        author: user.id,
        type,
        title,
        text,
        attachments: attachmentIds,
      }).save()

      return await Posts.findById(id)
        .populate('author')
        .populate({
          path: 'attachments',
          model: 'Attachments',
          populate: {
            path: 'body',
          },
        })
        .exec()
    },
  ),
}
