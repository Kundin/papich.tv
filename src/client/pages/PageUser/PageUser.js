import React from 'react'
import { cn } from '@bem-react/classname'
import { useParams } from 'react-router-dom'
import loadable from '@loadable/component'

import { Pad, Avatar } from '../../components'
import { useMe, useUser } from '../../graphql/hooks'
import './PageUser.css'

const PageNotFound = loadable(() => import('../../pages/PageNotFound/default'))

const cnPageUser = cn('PageUser')

export function PageUser() {
  const { vkId } = useParams()
  const {
    data: { me },
  } = useMe()
  const {
    data: { user },
    loading,
  } = useUser({ vkId: Number(vkId) })

  return loading ? (
    'Loading'
  ) : user ? (
    <div className={cnPageUser()}>
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
