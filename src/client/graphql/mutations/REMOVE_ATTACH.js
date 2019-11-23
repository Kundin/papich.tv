import gql from 'graphql-tag'

export const REMOVE_ATTACH = gql`
  mutation removeAttach($id: ID!) {
    removeAttach(id: $id) {
      id
    }
  }
`
