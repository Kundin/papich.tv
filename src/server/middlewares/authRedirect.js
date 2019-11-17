import request from 'request-promise-native'
import JWT from 'jsonwebtoken'

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

  const jwt = JWT.sign({ result }, config.jwt.secret, config.jwt.options)

  res.cookie('jwt', jwt)
  res.redirect('/')
}
