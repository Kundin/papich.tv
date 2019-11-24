import gql from 'graphql-tag'

export const ADD_POST_LIKE = gql`
  mutation addPostLike($id: ID!) {
    addPostLike(id: $id) {
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
