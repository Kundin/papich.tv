import { GraphQLID, GraphQLString, GraphQLList } from 'graphql'

import { PostType } from '../types'
import { Posts } from '../../models'

export const createPost = {
  type: PostType,
  description: 'Создать новый пост',
  args: {
    type: {
      name: 'type',
      type: GraphQLString,
    },
    text: {
      name: 'text',
      type: GraphQLString,
    },
    attachments: {
      name: 'attachments',
      type: new GraphQLList(GraphQLID),
    },
  },
  resolve: async (rootVal, { type = 'default', text, attachments }, { user }) => {
    console.log({ attachments })

    const { id } = await new Posts({
      author: user.id,
      type,
      text,
      attachments,
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
}
