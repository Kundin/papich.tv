import React from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'

import { Radio, ButtonAction } from '../../UI'
import { declOfNum } from '../../utils'
import './Poll.css'

const cnPoll = cn('Poll')

Poll.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  votes: PropTypes.array.isRequired,
}

export function Poll({ className, id, options, votes, ...props }) {
  const totalTitles = ['голос', 'голоса', 'голосов']

  return (
    <div {...props} className={cnPoll({}, [className])}>
      <div className={cnPoll('Options')}>
        {options.map(({ name }, i) => (
          <Radio key={`option-${i}`} className={cnPoll('Option')} name={id} text={name} />
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
