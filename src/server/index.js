import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import { ApolloServer } from 'apollo-server-express'

import { config } from '../config'
import { schema } from './graphql'
import { render, login, logout, detectDevice, authRedirect } from './middlewares'
import { getUserByJWT } from './utils'

const isDev = process.env.NODE_ENV !== 'production'

// Подключение к MongoDB
mongoose.Promise = global.Promise
mongoose.connect(config.mongoose.uri, config.mongoose.opts)

const app = express()

const server = new ApolloServer({
  schema,
  context: async ({ req }) => {
    const token = req.cookies.jwt || null
    const user = token ? await getUserByJWT(token) : null

    return { user }
  },
  debug: isDev,
  introspection: isDev,
  playground: isDev,
})

//
if (isDev) {
  const webpackConfig = require('../../webpack.config.js')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpack = require('webpack')
  const compiler = webpack(webpackConfig)

  app
    .use(
      webpackDevMiddleware(compiler, {
        publicPath: '/public/dist/web',
        serverSideRender: true,
        writeToDisk(filePath) {
          return /dist\/node\//.test(filePath) || /loadable-stats/.test(filePath)
        },
      }),
    )

    .use(webpackHotMiddleware(compiler))
}

app
  .disable('x-powered-by')
  .enable('trust proxy')

  // CORS
  .use(cors(config.cors))

// На локальном сервер отдачей файлов занимается NodeJS
if (config.isLocal) {
  app.use('/dist', express.static('./public/dist')).use('/static', express.static('./public'))
}

// Парсинг данных запроса
app
  .use(cookieParser())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())

// Подключение сервера Apollo
server.applyMiddleware({ app, path: '/graphql' })

app
  // Определение устройства
  .use(detectDevice)

  // Редирект после авторизации
  .get('/auth-redirect', authRedirect)

  // Вход и выход из аккаунта
  .post('/login', login)
  .post('/logout', logout)

  // Рендеринг
  .get('*', render)

  .listen(config.port, () => console.log(`Listen on port ${config.port}!`))
