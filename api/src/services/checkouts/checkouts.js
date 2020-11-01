import { context } from '@redwoodjs/api/dist/globalContext'

import { userByAuthId, reconcileUsersCustomer } from 'src/services/users/users'
import {
  customer,
  createAnonCustomer,
  setCustomerShipping,
} from 'src/services/customers/customers'
import { createSetupIntent } from 'src/services/setupIntents/setupIntents'
import { paymentMethod } from 'src/services/paymentMethods/paymentMethods'
import { createPaymentIntent } from 'src/services/orders/orders'
import { createDonation } from 'src/services/donations/donations'
import { projects, updateAllProjects } from '../projects/projects'
import { calculateMatchingAmounts } from '../utils'
import { fundingRound } from '../fundingRounds/fundingRounds'

// SET CUSTOMER
export const setCustomer = async ({ input }) => {
  const customer =
    input.customerSource === 'ANON'
      ? await createAnonCustomer()
      : await setCustomerViaAuth()
  return { customer }
}

// SET SHIPPING
export const setShipping = async ({ customerId, input }) => {
  const customer = await setCustomerShipping({ id: customerId, input })
  return { customer }
}

// SET INTENT
export const setIntent = async ({ customerId }) => {
  const setupIntent = await createSetupIntent({ customerId })
  return { setupIntent }
}

// SET PAYMENT
export const setPayment = async ({ paymentMethodId }) => {
  const method = await paymentMethod({ id: paymentMethodId })
  return { paymentMethod: method }
}

// // PLACE ORDER
export const placeOrder = async ({ input }) => {
  const paymentIntent = await createPaymentIntent(input)
  const donation = await createDonationFromPaymentIntent(input, paymentIntent)
  const allDonations = await projects({ include: { donations: true } })

  const { matchingAmountPool } = await fundingRound()

  const projectContributions = calculateMatchingAmounts(
    allDonations,
    matchingAmountPool
  )
  await updateAllProjects(projectContributions)
  return { paymentIntent, donation }
}

// PRIVATE

const setCustomerViaAuth = async () => {
  const authUser = context.currentUser
  if (!authUser) {
    return
  }
  const dbUser = await userByAuthId({ id: authUser.sub })
  if (dbUser.customerId) {
    return await customer({ id: dbUser.customerId })
  } else {
    return await reconcileUsersCustomer({ id: authUser.sub }).customer
  }
}

async function createDonationFromPaymentIntent(input, paymentIntent) {
  const authUser = context.currentUser
  const dbUser = await userByAuthId({ id: authUser.sub })
  const donation = await createDonation({
    amount: paymentIntent.amount,
    transactionId: paymentIntent.id,
    projectId: input.cart.cartItems[0].id,
    userId: dbUser.id,
  })
  return donation
}
