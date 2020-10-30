import { GlobalLayout } from 'src/layouts'
import { CheckoutProvider } from 'src/components/Checkout/CheckoutContext'
import { Body, Lead, PageHeading } from 'src/components/UI'
import { useParams } from '@redwoodjs/router'

const OrdersPage = () => {
  const { id } = useParams()
  return (
    <GlobalLayout>
      <CheckoutProvider>
        <PageHeading>Thank you!</PageHeading>
        <Lead className="mb-4">Your contribution was received. </Lead>
        <Body>
          You should receive an email receipt shortly. Your confirmation code is{' '}
          <strong>{id}</strong>
        </Body>
      </CheckoutProvider>
    </GlobalLayout>
  )
}

export default OrdersPage
