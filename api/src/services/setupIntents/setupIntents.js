import { stripe } from 'src/lib/stripe'

export const createSetupIntent = async ({ customerId }) => {
  const setupIntent = await stripe.setupIntents.create({
    customer: customerId,
    // we can change this if we only collect on goal completion.
    usage: 'on_session',
  })
  return castSetupIntent(setupIntent)
}

// PRIVATE

const castSetupIntent = (setupIntent) => {
  return { ...setupIntent, clientSecret: setupIntent.client_secret }
}
