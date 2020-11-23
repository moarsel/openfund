import Projects from 'src/components/Projects/Projects'
import { Card } from '../UI'
import { ContributionBar } from '../UI/ContributionBar/ContributionBar'

export const QUERY = gql`
  query PROJECTS {
    projects {
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
      contributionsTotal
      currentMatchingAmount
      goalAmount
    }
  }
`

export const Loading = () => (
  <div>
    <div className="grid grid-cols-1 gap-5 justify-items-auto sm:grid-cols-2 md:grid-cols-3 md:justify-items-auto">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-full my-1 rounded shadow-lg focus:opacity-75 hover:opacity:75"
        >
          <Card>
            <div
              className="object-cover w-full h-64 bg-gray-300"
              width="100"
              height="100"
            />
            <ContributionBar
              contributionsTotal={0}
              currentMatchingAmount={0}
              goalAmount={1000}
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">
                <h2 className="text-gray-400 bg-gray-400">Loading Text</h2>
              </div>
              <p className="text-base text-gray-400 bg-gray-400">
                Loading text, Loading text
              </p>
            </div>
          </Card>
        </div>
      ))}
    </div>
  </div>
)

export const Empty = () => {
  return <div className="rw-text-center">{'No projects yet. '}</div>
}

export const Success = ({ projects }) => {
  return <Projects projects={projects} />
}
