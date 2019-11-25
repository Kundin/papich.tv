import React from 'react'
import { cn } from '@bem-react/classname'

import { IconTimesCircleSolid } from '../../icons'
import { Radio } from '../../UI'
import './AttachPoll.css'

const cnAttachPoll = cn('AttachPoll')

export function AttachPoll({ className, options, onRemove }) {
  return (
    <div className={cnAttachPoll({}, [className])}>
      <div className={cnAttachPoll('Content')}>
        <div className={cnAttachPoll('Options')}>
          {options.map(({ name }, i) => (
            <Radio key={`option-${i}`} className={cnAttachPoll('Option')} disabled text={name} />
          ))}
        </div>
      </div>

      <div className={cnAttachPoll('Remove')}>
        <IconTimesCircleSolid className={cnAttachPoll('RemoveIcon')} onClick={onRemove} />
      </div>
    </div>
  )
}
