import { useCart } from 'src/components/Cart/CartContext'
import { useCheckout, PHASE } from 'src/components/Checkout'
import { currency } from 'src/utils'
import { Card } from '../UI/Card/Card'

const CheckoutSummaryItem = ({ item }) => (
  <div key={item.id} className="flex flex-wrap justify-between pb-3">
    <div>{item.name}</div>
    <div>{currency(item.amount)}</div>
    <div>
      <em>{item.shortDescription}</em>
    </div>
  </div>
)

const CartSummary = () => {
  const { cart } = useCart()
  return (
    <div className="mb-5">
      <h3 className="font-semibold uppercase text-md">Summary</h3>
      {cart &&
        cart.cartItems.map((item) => (
          <CheckoutSummaryItem key={item.id} item={item} />
        ))}
      <div className="flex flex-wrap justify-between">
        Total
        <div>{currency(cart.cartTotal)}</div>
      </div>
    </div>
  )
}

const ShippingSummary = ({ shipping, setPhase }) => {
  return (
    <div>
      <h3 className="mt-4 font-semibold uppercase text-md">
        Billing details{' '}
        <span className="text-small">
          (
          <button
            className="btn-link text-small"
            type="button"
            onClick={() => setPhase(PHASE.SET_SHIPPING)}
          >
            edit
          </button>
          )
        </span>
      </h3>
      <p>
        {shipping?.name}
        <br />
        {shipping?.address.line1}
        <br />
        {shipping?.address.line2 && (
          <>
            {shipping?.address.line2}
            <br />
          </>
        )}
        {shipping?.address.city}, {shipping?.address.state}
        {'  '}
        {shipping?.address.postalCode}
      </p>
    </div>
  )
}

const PaymentSummary = () => <h3>Payment Method</h3>

export const CheckoutSummary = () => {
  const { checkout, setPhase } = useCheckout()

  return (
    <Card className="max-w-xs p-6 mt-5 ml-3 divide-y-2 divide-dashed md:mt-0">
      <CartSummary />
      {checkout?.customer?.shipping ? (
        <ShippingSummary
          shipping={checkout?.customer?.shipping}
          setPhase={setPhase}
        />
      ) : null}
      {checkout?.payment ? <PaymentSummary /> : null}
    </Card>
  )
}
