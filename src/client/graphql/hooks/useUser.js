import { useQuery } from '@apollo/react-hooks'

import { USER } from '../queries'

export function useUser(variables) {
  return useQuery(USER, { variables })
}
