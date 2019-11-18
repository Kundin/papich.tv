import { GraphQLString } from 'graphql'

import { PostType } from '../types'
import { Posts } from '../../models'

export const createPost = {
  type: PostType,
  description: 'Создать новый пост',
  args: {
    text: {
      name: 'text',
      type: GraphQLString,
    },
  },
  resolve: async (rootVal, { text }, { user }) => {
    const { id } = await new Posts({
      author: user.id,
      text,
    }).save()

    return await Posts.findById(id)
      .populate('author')
      .exec()
  },
}
