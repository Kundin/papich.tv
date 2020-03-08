import React, { useState } from 'react'
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
  const [voted, setVoted] = useState(true)
  const totalTitles = ['голос', 'голоса', 'голосов']
  const widths = [20, 80, 10, 50, 40]

  return (
    <div {...props} className={cnPoll({ voted }, [className])}>
      <div className={cnPoll('Options')}>
        {options.map(({ name }, i) => (
          <div key={`option-${i}`} className={cnPoll('WrapperOption')}>
            <Radio
              className={cnPoll('Option')}
              checked={i === 0}
              disabled={voted}
              name={id}
              text={name}
            />
            <div className={cnPoll('Perzent')}>{`${widths[i]}%`}</div>
            <div className={cnPoll('OptionLine')} style={{ width: `${widths[i]}%` }} />
          </div>
        ))}
      </div>

      <div className={cnPoll('Footer')}>
        <div className={cnPoll('Total')}>
          Всего {votes.length} {declOfNum(votes.length, totalTitles)}
        </div>
        {!voted && <ButtonAction>Проголосовать</ButtonAction>}
      </div>
    </div>
  )
}
