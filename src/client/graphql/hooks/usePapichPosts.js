// Получить только посты от Папича

import { usePosts } from '../hooks'

export function usePapichPosts(variables) {
  return usePosts({ isPapich: true })
}
