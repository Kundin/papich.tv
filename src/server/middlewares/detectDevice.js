// Определение типа устройства с которого пришёл запрос

import express from 'express'
import device from 'express-device'

export function detectDevice(req, res, next) {
  const router = express.Router()

  router.use(device.capture()).use((req, res, next) => {
    const devicesMap = {
      desktop: 'desktop',
      tv: 'desktop',
      bot: 'desktop',
      tablet: 'touch',
      phone: 'touch',
      car: 'touch',
    }

    // Тип устройства и бандл
    res.device = devicesMap[req.device.type]

    next()
  })

  next()
}
