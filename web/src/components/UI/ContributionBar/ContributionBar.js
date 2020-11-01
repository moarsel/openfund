import React from 'react'
import { currency } from '../../../utils'

export function ContributionBar({
  contributionsTotal,
  currentMatchingAmount,
  goalAmount,
}) {
  const contributionProgress = (contributionsTotal / goalAmount) * 100
  const matchingProgress = (currentMatchingAmount / goalAmount) * 100

  return (
    <div className="relative">
      <div className="flex h-5 mb-2 overflow-hidden text-xs bg-gray-300">
        <div
          style={{ width: contributionProgress }}
          className="flex flex-col justify-center text-center text-white bg-green-500 shadow-none whitespace-nowrap"
        ></div>
        <div
          style={{ width: matchingProgress }}
          className="flex flex-col items-center justify-center text-center text-white bg-indigo-500 shadow-none whitespace-nowrap"
        ></div>
      </div>
      <div className="flex items-stretch justify-between px-3">
        <div>
          <span className="inline-block px-2 py-1 ml-1 text-xs font-semibold text-green-800 uppercase bg-green-200 rounded-lg">
            {currency(contributionsTotal)} raised
          </span>
          <span className="inline-block px-2 py-1 ml-1 text-xs font-semibold text-indigo-800 uppercase bg-indigo-200 rounded-lg">
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
