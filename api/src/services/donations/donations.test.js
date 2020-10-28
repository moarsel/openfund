/*
import { donations } from './donations'
*/

import { getMatchingAmounts } from './donations'

describe('donations', () => {
  it('returns true', () => {
    expect(true).toBe(true)
  })
})

describe('getMatchingAmounts', () => {
  it('return the expected amounts per project', () => {
    const donationData = [
      {
        projectId: 1,
        contributions: [{ amount: 100 }, { amount: 100 }, { amount: 100 }],
      },
      { projectId: 2, contributions: [{ amount: 300 }] },
    ]
    const expected = [
      { projectId: 1, contributionsTotal: 300, matchingAmount: 750 },
      { projectId: 2, contributionsTotal: 300, matchingAmount: 250 },
    ]
    const availableMatchingFunds = 1000
    const result = getMatchingAmounts(donationData, availableMatchingFunds)
    expect(result).toEqual(expected)
  })
})
