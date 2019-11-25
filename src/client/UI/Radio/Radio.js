import React from 'react'
import { cn } from '@bem-react/classname'

import './Radio.css'

const cnRadio = cn('Radio')

export function Radio({ className, name, val, text, checked, onChange, ...props }) {
  const Tag = text ? 'label' : 'div'

  return (
    <Tag className={cnRadio({}, [className])}>
      <input
        {...props}
        className={cnRadio('Control')}
        type="radio"
        name={name}
        value={val}
        defaultChecked={checked}
        onChange={(e) => {
          onChange && onChange(e, val)
        }}
      />
      <div className={cnRadio('Box')} />
      {text && <span className={cnRadio('Text')}>{text}</span>}
    </Tag>
  )
}
