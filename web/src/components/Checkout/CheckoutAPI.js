import { useMutation } from '@apollo/react-hooks'

// MUTATIONS
export const SET_CUSTOMER = gql`
  mutation setCustomerMutation($input: SetCustomerInput!) {
    setCustomer(input: $input) {
      customer {
        id
        email
        shipping {
          name
          phone
          address {
            line1
            line2
            city
            state
            postalCode
          }
        }
      }
    }
  }
`

export const SET_SHIPPING = gql`
  mutation setShippingMutation(
    $customerId: String!
    $input: SetShippingInput!
  ) {
    setShipping(customerId: $customerId, input: $input) {
      customer {
        id
        email
        shipping {
          name
          phone
          address {
            line1
            line2
            city
            state
            postalCode
          }
        }
      }
    }
  }
`

export const SET_INTENT = gql`
  mutation setIntentMutation($customerId: String!) {
    setIntent(customerId: $customerId) {
      setupIntent {
        id
        status
        clientSecret
      }
    }
  }
`

export const PLACE_ORDER = gql`
  mutation placeOrderMutation($input: PlaceOrderInput!) {
    placeOrder(input: $input) {
      paymentIntent {
        id
        amount
        created
        status
      }
    }
  }
`

// API
export const CheckoutAPI = () => {
  const [setCustomer] = useMutation(SET_CUSTOMER)
  const [setShipping] = useMutation(SET_SHIPPING)
  const [setIntent] = useMutation(SET_INTENT)
  const [placeOrder] = useMutation(PLACE_ORDER)

  return {
    setCustomer,
    setShipping,
    setIntent,
    placeOrder,
  }
}
