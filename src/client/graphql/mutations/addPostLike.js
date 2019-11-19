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
      text
      counters {
        likes
        comments
      }
      hasLike
      createdAt
    }
  }
`
