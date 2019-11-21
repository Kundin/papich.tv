import gql from 'graphql-tag'

export const POSTS = gql`
  query posts($isPapich: Boolean!) {
    posts(isPapich: $isPapich) {
      id
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
      isPapich
      createdAt
    }
  }
`
