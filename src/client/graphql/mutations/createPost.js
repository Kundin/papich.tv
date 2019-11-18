import gql from 'graphql-tag'

export const CREATE_POST = gql`
  mutation createPost($text: String) {
    createPost(text: $text) {
      id
      author {
        id
      }
      text
      createdAt
    }
  }
`
