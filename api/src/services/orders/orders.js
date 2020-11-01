import { stripe } from 'src/lib/stripe'

export async function createPaymentIntent(input) {
  if (!input.cart.cartItems[0]) {
    throw new Error('No project contributions are selected')
  }
  const paymentIntent = await stripe.paymentIntents.create({
    amount: input.cart.cartTotal, // stripe handles currency without decimals
    currency: 'cad',
    customer: input.customerId,
    payment_method: input.paymentMethodId,
    receipt_email: input.customerEmail,
    description: input.cart.cartItems[0].name,
    off_session: false, // change to true if charged at later date
    confirm: true,
    application_fee_amount: 0, // change if you want to take a fee
    transfer_data: {
      destination: input.cart.cartItems[0].stripeId,
    },
  })
  return castPaymentIntent(paymentIntent)
}

function castPaymentIntent({ id, amount, created, status }) {
  return { id, amount: amount, created, status }
}
