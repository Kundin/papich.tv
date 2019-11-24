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
        lvl
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
          ... on YouTubeAttachment {
            id
            url
          }
          ... on PollAttachment {
            id
            options {
              name
              votes {
                id
              }
            }
            votes {
              id
            }
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
