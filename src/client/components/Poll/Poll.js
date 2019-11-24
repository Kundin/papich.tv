import React from 'react'
import { cn } from '@bem-react/classname'

import { Checkbox } from '../../UI'
import './Poll.css'

const cnPoll = cn('Poll')

export function Poll({ className, options, onRemove }) {
  return (
    <div className={cnPoll({}, [className])}>
      <div className={cnPoll('Options')}>
        {options.map(({ name }, i) => (
          <Checkbox key={`option-${i}`} className={cnPoll('Option')} text={name} />
        ))}
      </div>
    </div>
  )
}
