import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import UserForm from './UserForm'
import { Lead } from 'src/components/UI'
import { Card } from 'src/components/UI/Card/Card'
import { currency } from 'src/utils'

export const QUERY = gql`
  query CURRENT_USER {
    currentUser {
      id
      email
      name
      Donation {
        id
        amount
        donationTime
        transactionId
        recipient {
          name
        }
      }
    }
  }
`
const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ currentUser }) => {
  const { addMessage } = useFlash()
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: () => {
      navigate(routes.account())
      addMessage('User updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateUser({ variables: { id, input } })
  }

  return (
    <div>
      <Lead as="h2">Profile Information</Lead>
      <div>
        <UserForm
          user={currentUser}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
      <div className="my-6">
        <Lead as="h2"> Contribution History</Lead>
        {currentUser.Donation.map(
          ({ id, amount, donationTime, transactionId, recipient }) => {
            return (
              <Card key={id} className="p-5 my-3">
                <Lead>
                  <strong>{currency(amount)} </strong>
                  to {recipient.name}
                </Lead>
                <div>
                  Received on {new Date(donationTime).toLocaleDateString()}
                </div>
                <div>Confirmation Code: {transactionId}</div>
              </Card>
            )
          }
        )}
      </div>
    </div>
  )
}
