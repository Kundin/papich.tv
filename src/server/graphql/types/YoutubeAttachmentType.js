import { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLNonNull } from 'graphql'

export const YouTubeAttachmentType = new GraphQLObjectType({
  name: 'YouTubeAttachment',
  description: 'Вложение с типом Видео на ютубе',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: ' Уникальный идентификатор',
    },

    url: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Полный путь к видео',
    },
  }),
})
