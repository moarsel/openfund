import { Round } from './Round'

export const QUERY = gql`
  query CURRENT_FUNDING_ROUND {
    fundingRound {
      matchingAmountPool
      endDate
    }
  }
`

export const Loading = () => (
  <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3 justify-items-auto">
    Loading...
  </div>
)

export const Empty = () => <div>Round not found</div>

export const Success = ({ fundingRound }) => {
  return <Round fundingRound={fundingRound} />
}
