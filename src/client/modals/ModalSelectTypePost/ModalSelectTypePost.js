import React from 'react'
import { cn } from '@bem-react/classname'

import { Modal } from '../../components'
import { Link } from '../../UI'
import { IconFilmSolid, IconNewspaperSolid, IconPollSolid } from '../../icons'
import './ModalSelectTypePost.css'

const cnModalSelectTypePost = cn('ModalSelectTypePost')

function TypePost({ icon, title, url }) {
  return (
    <Link to={url} className={cnModalSelectTypePost('Type')}>
      <div className={cnModalSelectTypePost('TypeIcon')}>{icon}</div>
      <div className={cnModalSelectTypePost('TypeTitle')}>{title}</div>
    </Link>
  )
}

export function ModalSelectTypePost({ className, onAttach, ...props }) {
  return (
    <Modal {...props} title="Выберите тип поста" className={cnModalSelectTypePost({}, [className])}>
      <div className={cnModalSelectTypePost('Content')}>
        <TypePost
          icon={<IconFilmSolid baseSize={48} />}
          title="Отзыв на фильм"
          url="/create-review-film"
        />
        <TypePost icon={<IconPollSolid baseSize={48} />} title="Голосование" url="/create-poll" />
        <TypePost
          icon={<IconNewspaperSolid baseSize={48} />}
          title="Обычная запись"
          url="/create-post"
        />
      </div>
    </Modal>
  )
}
