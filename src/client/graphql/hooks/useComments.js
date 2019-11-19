import { useQuery } from '@apollo/react-hooks'

import { COMMENTS } from '../queries'

export function useComments(variables) {
  return useQuery(COMMENTS, { variables })
}
