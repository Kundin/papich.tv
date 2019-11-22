import React from 'react'
import { cn } from '@bem-react/classname'
import { useParams } from 'react-router-dom'
import loadable from '@loadable/component'
import { Helmet } from 'react-helmet'

import { Pad, Avatar, PreloaderPage } from '../../components'
import { useMe, useUser } from '../../graphql'
import './PageUser.css'

const PageNotFound = loadable(() => import('../../pages/PageNotFound/default'))

const cnPageUser = cn('PageUser')

export function PageUser() {
  const { vkId } = useParams()

  // В идентификаторе не должно других символов кроме цифр
  if (/\D/.test(vkId)) {
    return <PageNotFound />
  }

  const {
    data: { me },
  } = useMe()
  const {
    data: { user },
    loading,
  } = useUser({ vkId: Number(vkId) })

  return loading ? (
    <PreloaderPage />
  ) : user ? (
    <div className={cnPageUser()}>
      <Helmet>
        <title>{user.fullName}</title>
        <meta name="description" content={`Информация о пользователе ${user.fullName}`} />
      </Helmet>

      <Pad className={cnPageUser('Base')}>
        <div className={cnPageUser('BaseContainer')}>
          <Avatar className={cnPageUser('Avatar')} user={user} size="l" />
          <div className={cnPageUser('BaseContent')}>
            <div className={cnPageUser('Name')}>{user.fullName}</div>
            <div className={cnPageUser('Status')}>Подписчик</div>
          </div>
        </div>
      </Pad>

      <Pad title={'Лента активности'}>Feed</Pad>
    </div>
  ) : (
    <PageNotFound />
  )
}
