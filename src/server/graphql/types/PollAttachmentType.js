import { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLList } from 'graphql'

import { PollOptionType } from './PollOptionType'

export const PollAttachmentType = new GraphQLObjectType({
  name: 'PollAttachment',
  description: 'Вложение с типом Опрос',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: ' Уникальный идентификатор',
    },

    options: {
      type: new GraphQLList(PollOptionType),
      description: 'Варианты ответа',
    },
  }),
})
