export const schema = gql`
  type FundingRound {
    id: Int!
    matchingAmountPool: Int!
    endDate: DateTime!
  }

  type Query {
    fundingRounds: [FundingRound!]!
  }

  input CreateFundingRoundInput {
    matchingAmountPool: Int!
    endDate: DateTime!
  }

  input UpdateFundingRoundInput {
    matchingAmountPool: Int
    endDate: DateTime
  }
`
