import { calculateMatchingAmounts, sumContributionsByUser } from './utils'

describe('calculateMatchingAmounts', () => {
  it('return the expected amounts per project', () => {
    const donationData = [
      {
        id: 1,
        donations: [
          { amount: 100, userId: 1 },
          { amount: 100, userId: 2 },
          { amount: 100, userId: 3 },
        ],
      },
      { id: 2, donations: [{ amount: 300 }] },
    ]

    const expected = [
      {
        id: 1,
        contributionsTotal: 300,
        currentMatchingAmount: 750,
        contributorCount: 3,
      },
      {
        id: 2,
        contributionsTotal: 300,
        currentMatchingAmount: 250,
        contributorCount: 1,
      },
    ]
    const availableMatchingFunds = 1000
    const result = calculateMatchingAmounts(
      donationData,
      availableMatchingFunds
    )
    expect(result).toEqual(expected)
  })
})

describe('sumContributionsByUser', () => {
  it('combines multiple contributions by the same user', () => {
    const donationData = [
      { userId: 2, amount: 100 },
      { userId: 2, amount: 100 },
      { userId: 1, amount: 100 },
    ]
    const expected = [
      { userId: 1, amount: 100 },
      { userId: 2, amount: 200 },
    ]
    const result = sumContributionsByUser(donationData)
    expect(result).toEqual(expected)
  })
})
