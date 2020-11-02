import { CheckoutFlow, CheckoutSummary } from 'src/components/Checkout'

export const Checkout = () => {
  return (
    <div className="flex flex-col items-start justify-start md:flex-row">
      <CheckoutFlow />
      <CheckoutSummary />
    </div>
  )
}
