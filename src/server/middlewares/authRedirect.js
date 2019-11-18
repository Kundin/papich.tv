import request from 'request-promise-native'
import JWT from 'jsonwebtoken'

import { Users } from '../models'
import { VKApi } from '../utils'
import { config, getFullUrlAccessTokenVK } from '../../config'

export async function authRedirect(req, res, next) {
  const { code } = req.query
  const url = getFullUrlAccessTokenVK(code)

  if (!code) return next()

  const result = JSON.parse(await request.get({ url }))

  if (!result.access_token) {
    console.log('Error auth', result)
    return next()
  }

  // Сохраняем пользователя или обновляем информацию о нём
  const user = await Users.findOne({ vkId: result.user_id })

  user
    ? await updateUser({ vkId: result.user_id, accessToken: result.access_token })
    : await saveUser({ vkId: result.user_id, accessToken: result.access_token })

  const jwt = JWT.sign(result, config.jwt.secret, config.jwt.options)

  res.cookie('jwt', jwt)
  res.redirect('/')
}

// Сохранить пользователя
async function saveUser(opts) {
  const user = await getUserFromVK(opts)

  return await new Users({
    vkId: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    sex: user.sex,
    avatar: user.photo_50,
  }).save()
}

// Обновить информацию о пользователе
async function updateUser(opts) {
  const user = await getUserFromVK(opts)

  return await Users.findOneAndUpdate(
    { vkId: opts.vkId },
    {
      firstName: user.first_name,
      lastName: user.last_name,
      sex: user.sex,
      avatar: user.photo_50,
    },
    { new: true },
  )
}

// Получить инфо о пользователе от ВКонтакте
async function getUserFromVK({ vkId, accessToken }) {
  const { response, error } = await VKApi('users.get', {
    user_ids: [vkId],
    fields: ['sex', 'photo_50'].join(),
    access_token: accessToken,
  })

  if (error) return Promise.reject(error)

  return response[0]
}
