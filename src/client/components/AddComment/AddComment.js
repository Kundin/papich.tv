import React, { useRef, useState } from 'react'
import { cn } from '@bem-react/classname'
import { useMutation } from '@apollo/react-hooks'

import { Avatar } from '../../components'
import { Textarea } from '../../UI'
import { IconTelegramPlaneBrands } from '../../icons'
import { ADD_COMMENT } from '../../graphql/mutations'
import { COMMENTS, POST } from '../../graphql/queries'
import './AddComment.css'

const cnAddComment = cn('AddComment')

export function AddComment({ className, post, user, ...props }) {
  const refComment = useRef()
  const [activeIcon, setActiveIcon] = useState(false)
  const [addComment, { data }] = useMutation(ADD_COMMENT, {
    update(cache, { data: { addComment } }) {
      const variables = { postId: post.id }
      let { comments } = cache.readQuery({ query: COMMENTS, variables })

      comments.push(addComment)

      cache.writeQuery({
        query: COMMENTS,
        variables,
        data: {
          comments,
        },
      })
      cache.writeQuery({
        query: POST,
        variables: { id: post.id },
        data: {
          post: addComment.post,
        },
      })
    },
  })

  // Получить текст сообщения
  function getText() {
    return refComment.current.value
  }

  // Очистить поле ввода сообщения
  function clearText() {
    refComment.current.value = ''
    setActiveIcon(false)
  }

  // Отправить комментарий
  function onSend() {
    const text = getText()

    if (text.length === 0) return

    addComment({ variables: { postId: post.id, text } })
    clearText()
  }

  // Ввод текста
  function onInput() {
    const text = getText()

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
