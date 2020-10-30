import gql from 'graphql-tag'

export const schema = gql`
  type Checkout {
    customerSource: String
    customer: Customer
    setupIntent: SetupIntent
    paymentMethod: PaymentMethod
    paymentIntent: PaymentIntent
  }

  input SetCustomerInput {
    customerSource: String!
  }

  input SetShippingInput {
    name: String!
    line1: String!
    line2: String!
    city: String!
    state: String!
    postalCode: String!
  }

  input PlaceOrderInput {
    customerId: String!
    customerEmail: String!
    paymentMethodId: String!
    cart: CartInput!
  }

  input CartInput {
    cartTotal: Int!
    cartItems: [CartItemInput!]
  }

  input CartItemInput {
    id: Int!
    amount: Int!
    name: String!
    ownerEmail: String
    logo: String!
    shortDescription: String!
    longDescription: String!
    coverImage: String!
    stripeId: String!
    goalAmount: Int!
  }

  type PaymentIntent {
    id: String!
    clientSecret: String!
    status: String!
    amount: Int!
    created: String!
  }

  type Mutation {
    setCustomer(input: SetCustomerInput!): Checkout!
    setShipping(customerId: String!, input: SetShippingInput!): Checkout!
    setIntent(customerId: String!): Checkout!
    setPayment(paymentMethodId: String!): Checkout!
    placeOrder(input: PlaceOrderInput!): Checkout!
  }
`
