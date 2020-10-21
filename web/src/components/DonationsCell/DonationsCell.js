import { Link, routes } from '@redwoodjs/router'

import Donations from 'src/components/Donations'

export const QUERY = gql`
  query DONATIONS {
    donations {
      id
      amount
      donationTime
      transactionId
      userId
      projectId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No donations yet. '}
      <Link to={routes.newDonation()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ donations }) => {
  return <Donations donations={donations} />
}
