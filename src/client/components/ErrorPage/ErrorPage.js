import React from 'react'
import { cn } from '@bem-react/classname'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import './ErrorPage.css'

const cnErrorPage = cn('ErrorPage')

ErrorPage.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
}

ErrorPage.defaultProps = {
  text: 'Произошла какая-то ошибка.',
}

export function ErrorPage({ className, text }) {
  return (
    <div className={cnErrorPage({}, [className])}>
      <Helmet>
        <title>Ошибка</title>
      </Helmet>
      {text}
    </div>
  )
}
