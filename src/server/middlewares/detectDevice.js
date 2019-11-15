// Определение типа устройства с которого пришёл запрос

import express from 'express'
import device from 'express-device'

export function detectDevice(req, res, next) {
  const router = express.Router()

  router.use(device.capture()).use((req, res, next) => {
    const hardDevice = req.query.device || null
    const correctDevices = ['desktop', 'touch']
    const devicesMap = {
      desktop: 'desktop',
      tv: 'desktop',
      bot: 'desktop',
      tablet: 'touch',
      phone: 'touch',
      car: 'touch',
    }

    // Проверка «жёсткого» типа девайса
    if (!correctDevices.includes(hardDevice)) {
      hardDevice = null
    }

    // Тип устройства и бандл
    res.device = hardDevice ? hardDevice : devicesMap[req.device.type]

    next()
  })

  next()
}
