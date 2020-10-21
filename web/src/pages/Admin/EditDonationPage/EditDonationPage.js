import DonationsLayout from 'src/layouts/DonationsLayout'
import EditDonationCell from 'src/components/Admin/EditDonationCell'

const EditDonationPage = ({ id }) => {
  return (
    <DonationsLayout>
      <EditDonationCell id={id} />
    </DonationsLayout>
  )
}

export default EditDonationPage
