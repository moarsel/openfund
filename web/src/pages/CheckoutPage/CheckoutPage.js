import { GlobalLayout } from 'src/layouts'
import { CheckoutProvider } from 'src/components/Checkout/CheckoutContext'
import { Checkout } from 'src/components/Checkout/Checkout'

const CheckoutPage = () => {
  return (
    <GlobalLayout>
      <h1>Checkout</h1>
      <CheckoutProvider>
        <Checkout />
      </CheckoutProvider>
    </GlobalLayout>
  )
}

export default CheckoutPage
