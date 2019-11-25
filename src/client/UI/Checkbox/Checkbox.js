import React from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'

import { IconCheckSolid } from '../../icons'
import './Checkbox.css'

const cnCheckbox = cn('Checkbox')

Checkbox.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  text: PropTypes.string,
  checked: PropTypes.bool,
}

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
}

export function Checkbox({ className, disabled, name, text, checked, ...props }) {
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
