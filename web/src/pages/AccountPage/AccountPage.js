import { PageHeading } from 'src/components/UI'
import { GlobalLayout, SimpleLayout } from 'src/layouts'
import EditUserCell from './EditUserCell'

const AccountPage = () => {
  return (
    <GlobalLayout>
      <SimpleLayout>
        <PageHeading>Account</PageHeading>
        <EditUserCell></EditUserCell>
      </SimpleLayout>
    </GlobalLayout>
  )
}

export default AccountPage
