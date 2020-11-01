import { Label, NumberField } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { useState } from 'react'
import { useCart } from 'src/components/Cart/CartContext'
import { currency } from 'src/utils'
import { Body, Lead, PageHeading } from '../UI'
import { Button } from '../UI/Button/Button'
import { Card } from '../UI/Card/Card'
import { ContributionBar } from '../UI/ContributionBar/ContributionBar'
import { SocialShare } from '../UI/SocialShare/SocialShare'

const Project = ({ project }) => {
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
    <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3 justify-items-auto">
      <div className="col-span-2">
        <img src={project.coverImage} alt="project image" className="w-full" />
        <SocialShare className="justify-end">Share</SocialShare>
        <PageHeading>{project.name} </PageHeading>
        <Lead className="mb-4">{project.shortDescription}</Lead>
        <Body>{project.longDescription}</Body>
        {project.websiteLink && (
          <Body>
            Learn more at the <a href={project.websiteLink}>project website</a>
          </Body>
        )}
        {project.videoLink && (
          <iframe className="w-full" src={project.videoLink} frameBorder="0" />
        )}
      </div>
      <Card className="sticky top-0 self-start mt-8">
        <ContributionBar
          contributionsTotal={project.contributionsTotal}
          currentMatchingAmount={project.currentMatchingAmount}
          goalAmount={project.goalAmount}
        />
        <div className="p-5">
          <Body className="mb-1">
            <Lead as="h3" className="mb-1">
              Contribute
            </Lead>
            <strong>{project.contributorCount}</strong> people have raised{' '}
            <strong>{currency(project.contributionsTotal)}</strong> so far.
            Right now, that unlocks{' '}
            <strong>{currency(project.currentMatchingAmount)}</strong> of
            matching funds.
          </Body>
          <Body>
            Will you help them reach their{' '}
            <strong>{currency(project.goalAmount)}</strong> goal?
          </Body>
        </div>
        <div className="flex flex-wrap items-end p-4 ">
          <label>
            Amount (USD)
            <input
              type="number"
              name="amount"
              value={amount / 100}
              onChange={(e) => setAmount(e.target.value * 100)}
              className="input-field"
              required
            />
          </label>
          <Button variant="secondary" onClick={() => setAmount(2000)}>
            $20
          </Button>
          <Button variant="secondary" onClick={() => setAmount(5000)}>
            $50
          </Button>
        </div>

        <Button className="w-full" onClick={() => handleSubmit(amount)}>
          Contribute {currency(amount)}
        </Button>
      </Card>
    </div>
  )
}

export default Project
