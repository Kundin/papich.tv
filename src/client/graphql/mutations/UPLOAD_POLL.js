import gql from 'graphql-tag'

export const UPLOAD_POLL = gql`
  mutation uploadPoll($options: [String]!) {
    uploadPoll(options: $options) {
      id
      type
      body {
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
  }
`
