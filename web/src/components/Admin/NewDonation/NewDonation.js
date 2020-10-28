import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import DonationForm from 'src/components/Admin/DonationForm'

const CREATE_DONATION_MUTATION = gql`
  mutation CreateDonationMutation($input: CreateDonationInput!) {
    createDonation(input: $input) {
      id
    }
  }
`

const NewDonation = () => {
  const { addMessage } = useFlash()
  const [createDonation, { loading, error }] = useMutation(
    CREATE_DONATION_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.donations())
        addMessage('Donation created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      transactionId: input.transactionId,
      userId: parseInt(input.userId),
      projectId: parseInt(input.projectId),
    })
    createDonation({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Donation</h2>
      </header>
      <div className="rw-segment-main">
        <DonationForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDonation
