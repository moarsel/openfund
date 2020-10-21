import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_DONATION_MUTATION = gql`
  mutation DeleteDonationMutation($id: Int!) {
    deleteDonation(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Donation = ({ donation }) => {
  const { addMessage } = useFlash()
  const [deleteDonation] = useMutation(DELETE_DONATION_MUTATION, {
    onCompleted: () => {
      navigate(routes.donations())
      addMessage('Donation deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete donation ' + id + '?')) {
      deleteDonation({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Donation {donation.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{donation.id}</td>
            </tr>
            <tr>
              <th>Amount</th>
              <td>{donation.amount}</td>
            </tr>
            <tr>
              <th>Donation time</th>
              <td>{timeTag(donation.donationTime)}</td>
            </tr>
            <tr>
              <th>Transaction id</th>
              <td>{donation.transactionId}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{donation.userId}</td>
            </tr>
            <tr>
              <th>Project id</th>
              <td>{donation.projectId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDonation({ id: donation.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(donation.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Donation
