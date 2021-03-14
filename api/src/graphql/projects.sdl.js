export const schema = gql`
  type Project {
    id: Int!
    collectiveId: Int!
    name: String!
    ownerEmail: String
    logo: String!
    shortDescription: String!
    longDescription: String
    coverImage: String
    stripeId: String
    goalAmount: Int
    videoLink: String
    websiteLink: String
    githubLink: String
    currentMatchingAmount: Int!
    contributorCount: Int!
    contributionsTotal: Int!
  }

  type Query {
    projects: [Project!]!
    project(id: Int!): Project
    queryProjectsFromOSC: [Project]
  }

  input CreateProjectInput {
    name: String!
    collectiveId: Int!
    ownerEmail: String
    logo: String!
    shortDescription: String!
    longDescription: String
    coverImage: String
    stripeId: String
    goalAmount: Int
    videoLink: String
    websiteLink: String
    githubLink: String
    currentMatchingAmount: Int!
    contributorCount: Int!
    contributionsTotal: Int!
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
    currentMatchingAmount: Int!
    contributorCount: Int!
    contributionsTotal: Int!
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project!
    updateProject(id: Int!, input: UpdateProjectInput!): Project!
    deleteProject(id: Int!): Project!
  }
`
