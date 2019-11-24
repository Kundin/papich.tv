import React from 'react'
import { cn } from '@bem-react/classname'

import { Checkbox, ButtonAction } from '../../UI'
import { declOfNum } from '../../utils'
import './Poll.css'

const cnPoll = cn('Poll')

export function Poll({ className, options, votes, onRemove }) {
  const totalTitles = ['голос', 'голоса', 'голосов']

  return (
    <div className={cnPoll({}, [className])}>
      <div className={cnPoll('Options')}>
        {options.map(({ name }, i) => (
          <Checkbox key={`option-${i}`} className={cnPoll('Option')} text={name} />
        ))}
      </div>

      <div className={cnPoll('Footer')}>
        <div className={cnPoll('Total')}>
          Всего {votes.length} {declOfNum(votes.length, totalTitles)}
        </div>
        <ButtonAction>Проголосовать</ButtonAction>
      </div>
    </div>
  )
}
