// Запрос к API VK

import request from 'request-promise-native'

import { config } from '../../config'

export async function VKApi(method, params) {
  const { urlApi, v, serviceKey } = config.vk
  const url = `${urlApi}/${method}`
  const form = Object.assign(params, {
    access_token: params.access_token || serviceKey,
    v,
  })
  const res = await request.post(url, { form })

  return JSON.parse(res)
}
