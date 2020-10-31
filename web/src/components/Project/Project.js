import { navigate, routes } from '@redwoodjs/router'
import { useCart } from 'src/components/Cart/CartContext'
import { Body, Lead, PageHeading } from '../UI'
import { Button } from '../UI/Button/Button'
import { Card } from '../UI/Card/Card'

const Project = ({ project }) => {
  const { addItem } = useCart()

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
      <Card className="sticky top-0 self-start p-3 mt-8">
        <div className="flex flex-wrap my-3 text-center text-gray-700 justify-stretch">
          <div className="w-1/3">
            <div className="text-2xl">${project.contributionsTotal}</div>
            <p>Total Contributions</p>
          </div>
          <div className="w-1/3">
            <div className="text-2xl">${project.goalAmount}</div>
            <p>Goal</p>
          </div>
        </div>
        <div className="flex flex-wrap my-3 text-center text-gray-700 justify-stretch">
          <div className="w-1/3">
            <div className="text-2xl">{project.contributorCount}</div>
            <p>Contributors</p>
          </div>
          <div className="w-1/3">
            <div className="text-2xl">${project.currentMatchingAmount}</div>
            <p>Current Matching Amount</p>
          </div>
        </div>
        <Button className="w-full" onClick={() => handleSubmit(2000)}>
          Contribute $20
        </Button>
      </Card>
    </div>
  )
}

export default Project
