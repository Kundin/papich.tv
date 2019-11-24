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

    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Тема опроса',
    },

    options: {
      type: new GraphQLList(PollOptionType),
      description: 'Варианты ответа',
    },
  }),
})
