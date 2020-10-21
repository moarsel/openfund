import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_DONATION_MUTATION = gql`
  mutation DeleteDonationMutation($id: Int!) {
    deleteDonation(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const DonationsList = ({ donations }) => {
  const { addMessage } = useFlash()
  const [deleteDonation] = useMutation(DELETE_DONATION_MUTATION, {
    onCompleted: () => {
      addMessage('Donation deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete donation ' + id + '?')) {
      deleteDonation({ variables: { id }, refetchQueries: ['DONATIONS'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Amount</th>
            <th>Donation time</th>
            <th>Transaction id</th>
            <th>User id</th>
            <th>Project id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr key={donation.id}>
              <td>{truncate(donation.id)}</td>
              <td>{truncate(donation.amount)}</td>
              <td>{timeTag(donation.donationTime)}</td>
              <td>{truncate(donation.transactionId)}</td>
              <td>{truncate(donation.userId)}</td>
              <td>{truncate(donation.projectId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.donation({ id: donation.id })}
                    title={'Show donation ' + donation.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editDonation({ id: donation.id })}
                    title={'Edit donation ' + donation.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete donation ' + donation.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(donation.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DonationsList
