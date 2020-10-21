import DonationsLayout from 'src/layouts/DonationsLayout'
import DonationCell from 'src/components/Admin/DonationCell'

const DonationPage = ({ id }) => {
  return (
    <DonationsLayout>
      <DonationCell id={id} />
    </DonationsLayout>
  )
}

export default DonationPage
