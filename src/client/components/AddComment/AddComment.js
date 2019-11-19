import React, { useRef, useState } from 'react'
import { cn } from '@bem-react/classname'
import { useMutation } from '@apollo/react-hooks'

import { Avatar } from '../../components'
import { Textarea } from '../../UI'
import { IconTelegramPlaneBrands } from '../../icons'
import { ADD_COMMENT } from '../../graphql/mutations'
import './AddComment.css'

const cnAddComment = cn('AddComment')

export function AddComment({ className, post, user, ...props }) {
  const refComment = useRef()
  const [activeIcon, setActiveIcon] = useState(false)
  const [addComment, { data }] = useMutation(ADD_COMMENT)

  // Отправить комментарий
  function onSend() {
    const text = refComment.current.value

    addComment({ variables: { postId: post.id, text } })
  }

  // Ввод текста
  function onInput() {
    const text = refComment.current.value

    setActiveIcon(text.length > 0)
  }

  return (
    <div {...props} className={cnAddComment({}, [className])}>
      <Avatar user={user} className={cnAddComment('Avatar')} />
      <Textarea
        ref={refComment}
        name="comment"
        placeholder="Комментирий к записи"
        className={cnAddComment('Comment')}
        style={{ height: '24px' }}
        onInput={onInput}
      />
      <div className={cnAddComment('Submit')} onClick={onSend}>
        <IconTelegramPlaneBrands className={cnAddComment('SubmitIcon', { active: activeIcon })} />
      </div>
    </div>
  )
}
