import { Link, routes } from '@redwoodjs/router'

import Projects from 'src/components/Projects/Projects'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <div className="rw-text-center">{'No projects yet. '}</div>
}

export const Success = ({ projects }) => {
  return <Projects projects={projects} />
}
