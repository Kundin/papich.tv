import React, { useState } from 'react'
import gql from 'graphql-tag'
import { Helmet } from 'react-helmet'
import { cn } from '@bem-react/classname'
import loadable from '@loadable/component'

import { WallPost, NewPost, PreloaderPage } from '../../components'
import { usePapichPosts, useMe } from '../../graphql'
import './PageNews.css'

const ModalSelectTypePost = loadable(() => import('../../modals/ModalSelectTypePost/default'))

const cnPageNews = cn('PageNews')

export function PageNews() {
  const [visibleModalSelectTypePost, setVisibleModalSelectTypePost] = useState(false)
  const {
    data: { me },
  } = useMe()
  const {
    data: { posts = [] },
    loading,
  } = usePapichPosts()

  return loading ? (
    <PreloaderPage />
  ) : (
    <div className={cnPageNews()}>
      <Helmet>
        <title>Новости от Папича</title>
      </Helmet>

      {/* Плашка для добавления новых постов */}
      {me.isPapich && (
        <NewPost
          className={cnPageNews('NewPost')}
          user={me}
          onClick={() => setVisibleModalSelectTypePost(true)}
        />
      )}

      {/* Список постов или заглушка */}
      {posts.length > 0 ? (
        <div className={cnPageNews('Wall')}>
          {posts.map(({ id, text, ...post }) => (
            <WallPost key={id} id={id} {...post}>
              {text}
            </WallPost>
          ))}
        </div>
      ) : (
        <div className={cnPageNews('Placeholder', { papich: me.isPapich })}>
          Здесь будет контент от Папича, как только он решит что-то опубликовать на своём сайте.
        </div>
      )}

      {/* Модальное окно для выбора типа поста */}
      <ModalSelectTypePost
        visible={visibleModalSelectTypePost}
        onClose={() => setVisibleModalSelectTypePost(false)}
      />
    </div>
  )
}
