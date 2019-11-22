import { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLNonNull } from 'graphql'

export const YoutubeAttachmentType = new GraphQLObjectType({
  name: 'YoutubeAttachment',
  description: 'Вложение с типом Видео на ютубе',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: ' Уникальный идентификатор',
    },

    src: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Полный путь к видео',
    },
  }),
})
