import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import DonationForm from 'src/components/DonationForm'

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
const UPDATE_DONATION_MUTATION = gql`
  mutation UpdateDonationMutation($id: Int!, $input: UpdateDonationInput!) {
    updateDonation(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ donation }) => {
  const { addMessage } = useFlash()
  const [updateDonation, { loading, error }] = useMutation(
    UPDATE_DONATION_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.donations())
        addMessage('Donation updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      transactionId: parseInt(input.transactionId),
      userId: parseInt(input.userId),
      projectId: parseInt(input.projectId),
    })
    updateDonation({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Donation {donation.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <DonationForm
          donation={donation}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
