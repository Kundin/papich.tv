import React from 'react'
import { cn } from '@bem-react/classname'

import { Pad } from '../../components'
import { texts } from './texts'
import './PageDonate.css'

const cnPageDonate = cn('PageDonate')

export function PageDonate() {
  return (
    <div className={cnPageDonate()}>
      <Pad padding="s">{texts.info}</Pad>

      <Pad padding="s">Form</Pad>
    </div>
  )
}
