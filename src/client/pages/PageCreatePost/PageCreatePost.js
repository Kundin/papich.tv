import React, { useRef } from 'react'
import { cn } from '@bem-react/classname'
import { useMutation } from '@apollo/react-hooks'

import { Pad } from '../../components'
import { Textarea, ButtonAction } from '../../UI'
import { useMe } from '../../graphql/hooks'
import { CREATE_POST } from '../../graphql/mutations'
import './PageCreatePost.css'

const cnPageCreatePost = cn('PageCreatePost')

export function PageCreatePost() {
  const refText = useRef()
  const {
    data: { me },
    loading,
  } = useMe()
  const [createPost, { data }] = useMutation(CREATE_POST)

  // Добавить пост
  function onAddPost() {
    const text = refText.current.value

    createPost({ variables: { text } })
  }

  return loading ? (
    'Loading…'
  ) : (
    <div className={cnPageCreatePost()}>
      <Pad title="Новая запись">
        <Textarea
          ref={refText}
          className={cnPageCreatePost('Text')}
          name="text"
          placeholder="Введите текст…"
        />
      </Pad>

      <div className={cnPageCreatePost('Footer')}>
        <ButtonAction onClick={onAddPost}>
          {me.isDefault ? 'Предложить' : 'Опубликовать'}
        </ButtonAction>
      </div>
    </div>
  )
}
