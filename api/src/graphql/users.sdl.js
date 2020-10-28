export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String
    authId: String!
    customerId: String!
    customer: Customer
    Donation: [Donation]!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
  }

  input CreateUserInput {
    email: String!
    name: String
    authId: String!
    customerId: String
  }

  input UpdateUserInput {
    email: String
    name: String
    customerId: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!
  }
`
