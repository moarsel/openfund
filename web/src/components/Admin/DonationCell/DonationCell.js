import Donation from 'src/components/Admin/Donation'

export const QUERY = gql`
  query FIND_DONATION_BY_ID($id: Int!) {
    donation: donation(id: $id) {
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

export const Empty = () => <div>Donation not found</div>

export const Success = ({ donation }) => {
  return <Donation donation={donation} />
}
