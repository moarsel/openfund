import Project from './Project'

export const QUERY = gql`
  query FIND_PROJECT_BY_ID($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Project not found</div>

export const Success = ({ project }) => {
  return <Project project={project} />
}
