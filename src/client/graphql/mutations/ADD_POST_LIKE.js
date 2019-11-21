import gql from 'graphql-tag'

export const ADD_POST_LIKE = gql`
  mutation addPostLike($id: ID!) {
    addPostLike(id: $id) {
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
  }
`
