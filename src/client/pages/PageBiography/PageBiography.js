import React from 'react'
import { cn } from '@bem-react/classname'

import './PageBiography.css'

const cnPageBiography = cn('PageBiography')

export function PageBiography() {
  return <div className={cnPageBiography()}>Биография</div>
}
