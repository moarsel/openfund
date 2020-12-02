import { navigate, routes } from '@redwoodjs/router'
import { useState } from 'react'
import { useCart } from 'src/components/Cart/CartContext'
import { currency } from 'src/utils'
import { Body, FormField, Lead, PageHeading, TextField } from '../UI'
import { Button } from '../UI/Button/Button'
import { Card } from '../UI/Card/Card'
import { ContributionBar } from '../UI/ContributionBar/ContributionBar'
import { SocialShare } from '../UI/SocialShare/SocialShare'

const Project = ({ project, endDate }) => {
  const isRoundCurrent = new Date(endDate) > new Date()
  const { addItem } = useCart()
  const [amount, setAmount] = useState(2000)

  function handleSubmit(amount) {
    addItem({
      item: {
        amount: amount,
        id: project.id,
        name: project.name,
        ownerEmail: project.ownerEmail,
        logo: project.logo,
        shortDescription: project.shortDescription,
        longDescription: project.longDescription,
        coverImage: project.coverImage,
        stripeId: project.stripeId,
        goalAmount: project.goalAmount,
      },
    })
    navigate(routes.checkout())
  }

  return (
    <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-3 justify-items-auto">
      <div className="col-span-2">
        <img
          src={project.coverImage}
          alt="project image"
          className="w-full"
          width="100%"
          height="100%"
        />
        <SocialShare className="justify-end">Share</SocialShare>
        <PageHeading>{project.name} </PageHeading>
        <Lead>{project.shortDescription}</Lead>
        <Body withMargins>{project.longDescription}</Body>
        {project.websiteLink && (
          <Body withMargins>
            Learn more at the{' '}
            <a href={project.websiteLink} className="underline">
              project website
            </a>
            .
          </Body>
        )}
        {project.videoLink && (
          <div className="mt-5 embed-responsive aspect-ratio-4/3">
            <iframe
              className="embed-responsive-item"
              src={project.videoLink}
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </div>
      <Card className="sticky self-start shadow-lg" style={{ top: '3rem' }}>
        <ContributionBar
          contributionsTotal={project.contributionsTotal}
          currentMatchingAmount={project.currentMatchingAmount}
          goalAmount={project.goalAmount}
        />
        <div className="p-6">
          <Body as="div" className="mb-1">
            <Lead as="h3" className="mb-1">
              {isRoundCurrent ? 'Your Contribution' : 'Contributions'}
            </Lead>
            <strong>{project.contributorCount}</strong> people have raised{' '}
            <strong>{currency(project.contributionsTotal)}</strong>. That
            unlocks <strong>{currency(project.currentMatchingAmount)}</strong>{' '}
            of matching funds.
          </Body>
          {isRoundCurrent && (
            <Body>
              Will you help them reach their{' '}
              <strong>{currency(project.goalAmount)}</strong> goal by{' '}
              <strong>
                {new Date(endDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                })}
              </strong>
              ?
            </Body>
          )}
        </div>
        {isRoundCurrent && (
          <form onSubmit={() => handleSubmit(amount)} className="m-6">
            <FormField
              as="fieldset"
              label="Amount (USD)"
              className="flex flex-wrap items-end justify-start"
            >
              <div className="w-24 mr-2">
                <TextField
                  type="number"
                  name="amount"
                  value={amount / 100}
                  onChange={(e) => setAmount(e.target.value * 100)}
                  className="input-field"
                  required
                  min="5"
                />
              </div>
              <div className="mt-2">
                <Button
                  className={`w-12 mr-2 ${
                    amount === 2000 ? ' bg-gray-300' : ''
                  }`}
                  variant="secondary"
                  aria-pressed={amount === 2000}
                  onClick={() => setAmount(2000)}
                >
                  $20
                </Button>
                <Button
                  className={`w-12 mr-2 ${
                    amount === 5000 ? ' bg-gray-300' : ''
                  }`}
                  variant="secondary"
                  aria-pressed={amount === 5000}
                  onClick={() => setAmount(5000)}
                >
                  $50
                </Button>
                <Button
                  className={`w-12 mr-2 ${
                    amount === 10000 ? ' bg-gray-300' : ''
                  }`}
                  aria-pressed={amount === 10000}
                  variant="secondary"
                  onClick={() => setAmount(10000)}
                >
                  $100
                </Button>
              </div>
            </FormField>

            <Button type="submit" className="my-4">
              Contribute {currency(amount)}
            </Button>
          </form>
        )}
      </Card>
    </div>
  )
}

export default Project
