import React from 'react'
import { cn } from '@bem-react/classname'

import { Checkbox, ButtonAction } from '../../UI'
import './Poll.css'

const cnPoll = cn('Poll')

export function Poll({ className, options, votes, onRemove }) {
  return (
    <div className={cnPoll({}, [className])}>
      <div className={cnPoll('Options')}>
        {options.map(({ name }, i) => (
          <Checkbox key={`option-${i}`} className={cnPoll('Option')} text={name} />
        ))}
      </div>

      <div className={cnPoll('Footer')}>
        <div className={cnPoll('Total')}>Проголосовало {votes.length}</div>
        <ButtonAction>Проголосовать</ButtonAction>
      </div>
    </div>
  )
}
