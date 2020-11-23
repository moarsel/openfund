import {
  Body,
  Card,
  Lead,
  PageHeading,
  FormField,
  Button,
  TextField,
} from '../UI'
import { ContributionBar } from '../UI/ContributionBar/ContributionBar'
import { SocialShare } from '../UI/SocialShare/SocialShare'
import Project from './Project'

export const QUERY = gql`
  query FIND_PROJECT_BY_ID($id: Int!) {
    fundingRounds: fundingRounds {
      endDate
    }
    project: project(id: $id) {
      id
      name
      ownerEmail
      logo
      shortDescription
      longDescription
      coverImage
      stripeId
      goalAmount
      videoLink
      websiteLink
      currentMatchingAmount
      contributorCount
      contributionsTotal
    }
  }
`

export const Loading = () => (
  <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3 justify-items-auto">
    <div className="col-span-2">
      <div className="w-full h-full bg-gray-300" />
      <SocialShare className="justify-end">Share</SocialShare>
      <PageHeading className="text-gray-300"> Project </PageHeading>
      <Lead className="text-gray-300">Description</Lead>
      <Body withMargins>Detailed description of project</Body>
    </div>
    <Card className="sticky self-start shadow-lg" style={{ top: '3rem' }}>
      <ContributionBar
        contributionsTotal={0}
        currentMatchingAmount={0}
        goalAmount={1000}
      />
      <div className="p-6">
        <Body className="mb-1">
          <Lead as="h3" className="mb-1">
            Your Contribution
          </Lead>
          <strong>{0}</strong> people have raised <strong>0</strong> so far.
          Right now, that unlocks <strong>0</strong> of matching funds.
        </Body>
        <Body>
          Will you help them reach their <strong>$1000</strong> goal by{' '}
          <strong>
            {new Date().toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
            })}
          </strong>
          ?
        </Body>
      </div>
      <div className="text-center">
        <div className="flex flex-wrap items-end justify-start px-6 pb-6 text-left">
          <div className="w-40 mr-2 ">
            <FormField label="Amount (USD)">
              <TextField
                type="number"
                name="amount"
                value={100}
                className=" input-field"
                required
                min="5"
              />
            </FormField>
          </div>
          <div className="mt-2">
            <Button className={`w-12 mr-2`} variant="secondary">
              $20
            </Button>
            <Button className={`w-12 mr-2`} variant="secondary">
              $50
            </Button>
            <Button className={`w-12 mr-2`} variant="secondary">
              $100
            </Button>
          </div>
        </div>

        <Button type="submit" className="mb-4">
          Contribute
        </Button>
      </div>
    </Card>
  </div>
)

export const Empty = () => <div>Project not found</div>

export const Success = ({ project, fundingRounds }) => {
  return <Project project={project} endDate={fundingRounds[0].endDate} />
}
