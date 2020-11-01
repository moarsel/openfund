import { CheckoutFlow, CheckoutSummary } from 'src/components/Checkout'

export const Checkout = () => {
  return (
    <div className="flex items-start justify-between">
      <CheckoutFlow />
      <CheckoutSummary />
    </div>
  )
}
