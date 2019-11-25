import React, { forwardRef } from 'react'
import { cn } from '@bem-react/classname'
import PropTypes from 'prop-types'

import './Textarea.css'

const cnTextarea = cn('Textarea')

export const Textarea = forwardRef(({ className, ...props }, ref) => {
  return <textarea {...props} ref={ref} className={cnTextarea({}, [className])} />
})

Textarea.displayName = 'Textarea'

Textarea.propTypes = {
  className: PropTypes.string,
}
