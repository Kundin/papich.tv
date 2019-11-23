import {
  GraphQLInt,
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
} from 'graphql'

export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'Пользователь',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: ' Уникальный идентификатор',
    },

    vkId: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Идентификатор ВКонтакте',
    },

    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Имя',
    },

    lastName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Фамилия',
    },

    fullName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Полное имя',
    },

    sex: {
      type: new GraphQLNonNull(GraphQLInt),
      description: ['Пол\n\n', '0 - не определён\n\n', '1 - женский\n\n', '2 - мужской'].join(),
    },

    avatar: {
      type: GraphQLString,
      description: 'Полный URL-адрес до аватарки',
    },

    email: {
      type: GraphQLString,
      description: 'Адрес электронной почты',
    },

    lvl: {
      type: GraphQLString,
      description: 'Уровень пользователя',
    },

    isWoman: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Это женщина?',
    },

    isMan: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Это мужчина?',
    },

    isDefault: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Это обычный пользователь?',
    },

    isAdmin: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Это админ?',
    },

    isPapich: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Это Папич?',
    },

    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Дата регистрации',
      resolve: (user) => user.createdAt.toString(),
    },

    updatedAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Дата последнего обновления',
      resolve: (user) => user.updatedAt.toString(),
    },
  }),
})
