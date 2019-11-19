import gql from 'graphql-tag'

export const COMMENTS = gql`
  query comments($postId: ID) {
    comments(postId: $postId) {
      id
      post {
        id
      }
      author {
        vkId
        firstName
        lastName
        fullName
        sex
        avatar
        email
        isMan
        isWoman
        isDefault
        isAdmin
        isPapich
      }
      text
      createdAt
    }
  }
`
