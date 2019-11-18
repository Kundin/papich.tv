// Модель пользователя

import { model } from 'mongoose'
import crypto from 'crypto'

import { UsersSchema } from '../schemes'

/* ВИРТУАЛЬНЫЕ ПОЛЯ */

// Полное имя
UsersSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`
})

// Это женщина?
UsersSchema.virtual('isWoman').get(function() {
  return this.sex === 1
})

// Это мужчина?
UsersSchema.virtual('isMan').get(function() {
  return this.sex === 2
})

// Пароль
UsersSchema.virtual('password')
  .set(function(password) {
    this._plainPassword = password
    this.salt = `${Math.random()}`
    this.hashPassword = this.encryptPassword(password)
  })
  .get(function() {
    return this._plainPassword
  })

/* МЕТОДЫ ДОКУМЕНТА */

// Зашифровать пароль
UsersSchema.methods.encryptPassword = function(password) {
  return crypto
    .createHmac('sha1', this.salt)
    .update(password)
    .digest('hex')
}

// Проверить правильность пароля
UsersSchema.methods.checkPassword = function(password) {
  return this.encryptPassword(password) === this.hashPassword
}

/* МЕТОДЫ МОДЕЛИ */

export const Users = model('Users', UsersSchema)
