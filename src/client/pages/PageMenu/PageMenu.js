import React from 'react'
import { cn } from '@bem-react/classname'

import { Pad, Avatar } from '../../components'
import { useMe } from '../../graphql'
import './PageMenu.css'

const cnPageMenu = cn('PageMenu')

export function PageMenu() {
  const {
    data: { me },
  } = useMe()

  return (
    <div className={cnPageMenu()}>
      <Pad className={cnPageMenu('Profile')}>
        <div className={cnPageMenu('ProfileContainer')}>
          <Avatar user={me} className={cnPageMenu('ProfileAvatar')} />
          <div className={cnPageMenu('ProfileInfo')}>
            <div className={cnPageMenu('ProfileName')}>{me.fullName}</div>
            <div className={cnPageMenu('ProfileText')}>Перейти в профиль</div>
          </div>
        </div>
      </Pad>
    </div>
  )
}
