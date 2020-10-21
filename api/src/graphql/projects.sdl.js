export const schema = gql`
  type Project {
    id: Int!
    name: String!
    ownerEmail: String!
    logo: String!
    shortDescription: String!
    longDescription: String!
    coverImage: String!
    stripeId: String!
    goalAmount: Int!
    donations: [Donation]!
    videoLink: String!
    websiteLink: String!
  }

  type Query {
    projects: [Project!]!
    project(id: Int!): Project
  }

  input CreateProjectInput {
    name: String!
    ownerEmail: String!
    logo: String!
    shortDescription: String!
    longDescription: String!
    coverImage: String!
    stripeId: String!
    goalAmount: Int!
    videoLink: String!
    websiteLink: String!
  }

  input UpdateProjectInput {
    name: String
    ownerEmail: String
    logo: String
    shortDescription: String
    longDescription: String
    coverImage: String
    stripeId: String
    goalAmount: Int
    videoLink: String
    websiteLink: String
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project!
    updateProject(id: Int!, input: UpdateProjectInput!): Project!
    deleteProject(id: Int!): Project!
  }
`
