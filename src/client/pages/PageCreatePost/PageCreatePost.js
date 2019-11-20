import React, { useRef } from 'react'
import { cn } from '@bem-react/classname'
import { useMutation } from '@apollo/react-hooks'
import { Redirect } from 'react-router-dom'

import { Pad, PreloaderPage, ErrorPage } from '../../components'
import { Textarea, ButtonAction } from '../../UI'
import { IconPaperclipSolid } from '../../icons'
import { useMe } from '../../graphql/hooks'
import { POSTS } from '../../graphql/queries'
import { CREATE_POST, UPLOAD_FILE } from '../../graphql/mutations'
import './PageCreatePost.css'

const cnPageCreatePost = cn('PageCreatePost')

export function PageCreatePost() {
  const refText = useRef()
  const {
    data: { me },
    loading,
  } = useMe()
  const [createPost, { data }] = useMutation(CREATE_POST, {
    update(cache, { data: { createPost } }) {
      const variables = { type: 'default' }
      let { posts } = cache.readQuery({ query: POSTS, variables })

      // Добавляем пост в самое начало списка
      posts.unshift(createPost)

      cache.writeQuery({
        query: POSTS,
        variables,
        data: {
          posts,
        },
      })
    },
  })
  const [uploadFile, { data: dataFile }] = useMutation(UPLOAD_FILE)

  // Добавить пост
  function onAddPost() {
    const text = refText.current.value

    createPost({ variables: { text } })
  }

  // Загрузка файла
  function onUpload(e) {
    const {
      validity,
      files: [file],
    } = e.target

    const reader = new FileReader()

    console.log(file)

    // reader.onloadend = () => {
    //   this.setState({
    //     file,
    //     imagePreviewUrl: reader.result
    //   });
    // }
    //
    // reader.readAsDataURL(file)

    uploadFile({ variables: { file } })
  }

  return loading ? (
    <PreloaderPage />
  ) : data ? (
    <Redirect to={`/post-${data.createPost.id}`} />
  ) : me.isDefault ? (
    <ErrorPage text="Создавать новые записи могут только администраторы и Папич." />
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

        <div className={cnPageCreatePost('Attach')}>
          <IconPaperclipSolid className={cnPageCreatePost('AttachIcon')} />
          <input
            type="file"
            accept="image/*"
            className={cnPageCreatePost('AttachInput')}
            onChange={onUpload}
          />
        </div>
      </div>
    </div>
  )
}
