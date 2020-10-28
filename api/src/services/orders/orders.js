import { stripe } from 'src/lib/stripe'

export async function createPaymentIntent(input) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: input.cart.cartTotal * 100, // stripe handles currency without decimals
    currency: 'cad',
    customer: input.customerId,
    payment_method: input.paymentMethodId,
    off_session: false, // change to true if charged at end of round
    confirm: true,
  })
  return castPaymentIntent(paymentIntent)
}

function castPaymentIntent({ id, amount, created, status }) {
  return { id, amount: amount / 100, created, status }
}
