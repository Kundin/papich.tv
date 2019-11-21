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
        title
        text
        attachments {
          id
          type
          body {
            ... on PhotoAttachment {
              id
              src
            }
          }
        }
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
