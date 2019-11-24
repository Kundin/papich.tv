import React from 'react'
import { cn } from '@bem-react/classname'

import { IconCheckSolid } from '../../icons'
import './Checkbox.css'

const cnCheckbox = cn('Checkbox')

export function Checkbox({ className, disabled = false, name, text, checked = false, ...props }) {
  return (
    <label className={cnCheckbox({}, [className])}>
      <input
        className={cnCheckbox('Control')}
        type="checkbox"
        name={name}
        disabled={disabled}
        defaultChecked={checked}
        {...props}
      />
      <div className={cnCheckbox('Box')}>
        <IconCheckSolid baseSize={16} className={cnCheckbox('Icon')} />
      </div>
      {text && <span className={cnCheckbox('Text')}>{text}</span>}
    </label>
  )
}
