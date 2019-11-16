import React from 'react'
import gql from 'graphql-tag'
import { Helmet } from 'react-helmet'
import { cn } from '@bem-react/classname'

import { WallPost } from '../../components'
import './PageIndex.css'

const cnPageIndex = cn('PageIndex')

export function PageIndex() {
  return (
    <div>
      <Helmet>
        <title>Papich.tv</title>
      </Helmet>
      <div className={cnPageIndex()}>
        <div className={cnPageIndex('Wall')}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((item) => (
            <WallPost
              key={item}
              author={{
                avatar:
                  'https://sun1-26.userapi.com/c626130/v626130193/59d56/yemOiS6nWtY.jpg?ava=1',
                fullName: 'Evil Papich',
              }}
            >
              Гайс, тут такое дело, по поводу ютуб канала Рофляночка, я не имею пруфов что страх
              прям владелец или профит получает, не надо душить его, мб там рли человек не при
              делах, а его уже прессуют:(. Прессовать только страхислава и его псевдо-группу. У меня
              никогда не было целей как то атаковать мелкие каналы которые потеют за копейки
              буквально (а профит у них никакой поверьте).
            </WallPost>
          ))}
        </div>
      </div>
    </div>
  )
}
