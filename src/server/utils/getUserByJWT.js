// Получить пользователя по JSON Web Token

import JWT from 'jsonwebtoken'

import { config } from '../../config'
import { Users } from '../models'

export async function getUserByJWT(token) {
  const { user_id } = JWT.verify(token, config.jwt.secret)

  // Расшариваем информацию о пользователе
  const user = await Users.findById(user_id).exec()

  return user
}
