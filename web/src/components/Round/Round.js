import { Link, routes } from '@redwoodjs/router'
import React from 'react'
import { currency } from 'src/utils'
import { Card, Lead, Body } from '../UI'

export function Round({ fundingRound }) {
  const isRoundCurrent = new Date(fundingRound.endDate) > new Date()
  return isRoundCurrent ? (
    <Card className="max-w-xl p-5">
      <Lead>Contribute today!</Lead>
      <Body withMargins className="mt-2 ">
        We&apos;re fundraising for the projects below until{' '}
        <strong>
          {new Date(fundingRound.endDate).toLocaleTimeString('en-US', {
            month: 'long',
            day: 'numeric',
          })}
        </strong>
        . We use{' '}
        <Link to={routes.about()} className="font-bold underline">
          Quadratic Funding
        </Link>
        , so your contribution will determine how we distribute an extra{' '}
        <strong>{currency(fundingRound.matchingAmountPool)}</strong> to the
        projects that the community needs.
      </Body>
    </Card>
  ) : (
    <Card className="max-w-xl p-5">
      <Lead>Thanks for joining our fundraiser!</Lead>
      <Body withMargins className="mt-2">
        This funding round has now concluded. We will use{' '}
        <Link to={routes.about()} className="font-bold underline">
          Quadratic Funding
        </Link>
        , so that all contributions we received will determine how we distribute
        our additional funds to the projects that the community needs.
      </Body>
    </Card>
  )
}
