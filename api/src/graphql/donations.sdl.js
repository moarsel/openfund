export const schema = gql`
  type Donation {
    id: Int!
    amount: Int!
    donationTime: DateTime!
    transactionId: Int!
    donor: User!
    recipient: Project!
    userId: Int!
    projectId: Int!
  }

  type Query {
    donations: [Donation!]!
    donation(id: Int!): Donation
  }

  input CreateDonationInput {
    amount: Int!
    donationTime: DateTime!
    transactionId: Int!
    userId: Int!
    projectId: Int!
  }

  input UpdateDonationInput {
    amount: Int
    donationTime: DateTime
    transactionId: Int
    userId: Int
    projectId: Int
  }

  type Mutation {
    createDonation(input: CreateDonationInput!): Donation!
    updateDonation(id: Int!, input: UpdateDonationInput!): Donation!
    deleteDonation(id: Int!): Donation!
  }
`
