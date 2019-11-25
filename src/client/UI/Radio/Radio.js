import React from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'

import './Radio.css'

const cnRadio = cn('Radio')

Radio.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  checked: PropTypes.bool,
}

export function Radio({ className, text, checked, ...props }) {
  const Tag = text ? 'label' : 'div'

  return (
    <Tag className={cnRadio({}, [className])}>
      <input {...props} className={cnRadio('Control')} type="radio" defaultChecked={checked} />
      <div className={cnRadio('Box')} />
      {text && <span className={cnRadio('Text')}>{text}</span>}
    </Tag>
  )
}
