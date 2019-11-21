import React from 'react'
import { cn } from '@bem-react/classname'

import './Avatar.css'

const cnAvatar = cn('Avatar')

export function Avatar({ className, user, size = 'm', ...props }) {
  return <img {...props} className={cnAvatar({ size }, [className])} src={user.avatar} alt="" />
}
