import gql from 'graphql-tag'

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $text: String!) {
    addComment(postId: $postId, text: $text) {
      id
      post {
        id
        type
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
        counters {
          likes
          comments
        }
        hasLike
        createdAt
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
