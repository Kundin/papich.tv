import { GraphQLString } from 'graphql'

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
  },
  resolve: async (rootVal, { type = 'default', text }, { user }) => {
    const { id } = await new Posts({
      author: user.id,
      type,
      text,
    }).save()

    return await Posts.findById(id)
      .populate('author')
      .exec()
  },
}
