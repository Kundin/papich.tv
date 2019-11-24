import gql from 'graphql-tag'

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $text: String!) {
    addComment(postId: $postId, text: $text) {
      id
      post {
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
      text
      createdAt
    }
  }
`
