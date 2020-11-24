import { Link } from '@redwoodjs/router'
import React from 'react'
import { currency } from 'src/utils'
import { Card, Lead, Body } from '../UI'

export function Round({ fundingRound }) {
  return (
    <Card className="max-w-xl p-5">
      <Lead>Contribute today!</Lead>
      <Body className="mt-2 ">
        We&apos;re fundraising for the projects below until{' '}
        <strong>
          {new Date(fundingRound.endDate).toLocaleTimeString('en-US', {
            month: 'long',
            day: 'numeric',
          })}
        </strong>
        . We use{' '}
        <Link href="/about" className="font-bold underline">
          Quadratic Funding
        </Link>
        , so your contribution will determine how we distribute an extra{' '}
        <strong>{currency(fundingRound.matchingAmountPool)}</strong> to the
        projects that the community needs.
      </Body>
    </Card>
  )
}
