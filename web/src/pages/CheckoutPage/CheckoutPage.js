import { GlobalLayout } from 'src/layouts'
import { CheckoutProvider } from 'src/components/Checkout/CheckoutContext'
import { Checkout } from 'src/components/Checkout/Checkout'
import { PageHeading } from 'src/components/UI'

const CheckoutPage = () => {
  return (
    <GlobalLayout>
      <PageHeading>Checkout</PageHeading>
      <CheckoutProvider>
        <Checkout />
      </CheckoutProvider>
    </GlobalLayout>
  )
}

export default CheckoutPage
