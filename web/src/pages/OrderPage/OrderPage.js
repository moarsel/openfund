import { GlobalLayout } from 'src/layouts'
import { CheckoutProvider } from 'src/components/Checkout/CheckoutContext'
import { OrderConfirmation } from '../../components/Checkout/OrderConfirmation'
const OrdersPage = () => {
  return (
    <GlobalLayout>
      <CheckoutProvider>
        <h1>Order Receipt</h1>
        <OrderConfirmation></OrderConfirmation>
      </CheckoutProvider>
    </GlobalLayout>
  )
}

export default OrdersPage
