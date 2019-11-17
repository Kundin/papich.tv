import React from 'react'
import { cn } from '@bem-react/classname'

import './Avatar.css'

const cnAvatar = cn('Avatar')

export function Avatar({ className, user, ...props }) {
  return <img {...props} className={cnAvatar({}, [className])} src={user.avatar} />
}
