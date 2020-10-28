import gql from 'graphql-tag'

export const schema = gql`
  type SetupIntent {
    id: String!
    clientSecret: String!
    status: String!
  }
`
