import { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLNonNull } from 'graphql'

export const PhotoAttachmentType = new GraphQLObjectType({
  name: 'PhotoAttachment',
  description: 'Вложение с типом Фото',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: ' Уникальный идентификатор',
    },

    src: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Относительный путь к фотографии',
    },
  }),
})
