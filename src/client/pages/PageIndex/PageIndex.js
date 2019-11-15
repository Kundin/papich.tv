import React from 'react'
import gql from 'graphql-tag'
import { Helmet } from 'react-helmet'
import { cn } from '@bem-react/classname'

import './PageIndex.css'

const cnPageIndex = cn('PageIndex')

export function PageIndex() {
  return (
    <div>
      <Helmet>
        <title>Papich.tv</title>
      </Helmet>
      <div className={cnPageIndex()}>Papich.tv</div>
    </div>
  )
}
