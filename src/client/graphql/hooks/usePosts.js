import { useQuery } from '@apollo/react-hooks'

import { POSTS } from '../queries'

export function usePosts(variables) {
  return useQuery(POSTS, { variables })
}
