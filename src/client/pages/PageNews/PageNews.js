import React from 'react'
import gql from 'graphql-tag'
import { Helmet } from 'react-helmet'
import { cn } from '@bem-react/classname'

import { WallPost } from '../../components'
import news from './news'
import './PageNews.css'

const cnPageNews = cn('PageNews')

export function PageNews() {
  return (
    <div>
      <Helmet>
        <title>Papich.tv</title>
      </Helmet>
      <div className={cnPageNews()}>
        <div className={cnPageNews('Wall')}>
          {news.map(({ id, text, ...post }) => (
            <WallPost key={id} {...post}>
              {text}
            </WallPost>
          ))}
        </div>
      </div>
    </div>
  )
}
