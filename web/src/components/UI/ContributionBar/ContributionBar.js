import React from 'react'
import { currency } from '../../../utils'

export function ContributionBar({
  contributionsTotal,
  currentMatchingAmount,
  goalAmount,
}) {
  const contributionProgress = (contributionsTotal / goalAmount) * 100
  const matchingProgress =
    contributionProgress + (currentMatchingAmount / goalAmount) * 100
  return (
    <div className="relative">
      <div className="relative flex h-5 mb-2 overflow-hidden text-xs bg-gray-300">
        <div
          style={{ width: `${matchingProgress}%` }}
          className="absolute items-center justify-center h-5 text-center text-white shadow-none bg-accent whitespace-nowrap"
        ></div>
        <div
          style={{ width: `${contributionProgress}%` }}
          className="absolute justify-center h-5 text-center text-white bg-purple-500 shadow-none whitespace-nowrap"
        ></div>
      </div>
      <div className="flex items-stretch justify-between px-3">
        <div>
          <span className="inline-block px-2 py-1 ml-1 text-xs font-semibold text-purple-800 uppercase bg-purple-200 rounded-lg">
            {currency(contributionsTotal)} raised
          </span>
          <span className="inline-block px-2 py-1 ml-1 text-xs font-semibold text-gray-900 uppercase rounded-lg bg-accent">
            {currency(currentMatchingAmount)} matched
          </span>
        </div>
        <span className="flex items-center px-2 py-1 ml-1 text-xs font-semibold text-center text-gray-800 uppercase bg-gray-200 rounded-lg">
          {currency(goalAmount)} goal
        </span>
      </div>
    </div>
  )
}
