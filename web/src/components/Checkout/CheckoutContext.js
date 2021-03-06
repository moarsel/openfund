import { createContext, useContext, useReducer } from 'react'
import { useAuth } from '@redwoodjs/auth'

import { useCart } from 'src/components/Cart/CartContext'
import { CheckoutReducer, CheckoutAPI } from 'src/components/Checkout'

// The Checkout Phases
export const PHASE = {
  SET_CUSTOMER: 'SET_CUSTOMER',
  SET_SHIPPING: 'SET_SHIPPING',
  // SET_INTENT: 'SET_INTENT', // programmatic phase only
  SET_PAYMENT_METHOD: 'SET_PAYMENT',
  ORDER_CONFIRMATION: 'ORDER_CONFIRMATION',
}

// Initial State
export const initialState = {
  phase: PHASE.SET_CUSTOMER,
  customer: null,
  paymentMethod: null,
  setupIntent: null,
  order: null,
  loading: false,
  error: null,
}

// Create the Context
const CheckoutContext = createContext(initialState)

// useCheckout hook
export const useCheckout = () => useContext(CheckoutContext)

// The Provider
export const CheckoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CheckoutReducer, initialState)
  const { currentUser } = useAuth()
  const { cart, clearCart } = useCart()
  const API = CheckoutAPI()

  // ACTIONS
  // set loading
  const setLoading = (val) => {
    dispatch({
      type: 'SET_LOADING',
      payload: val,
    })
  }

  const initCheckout = () => {
    setLoading(true)
    if (currentUser) {
      setCustomer({ customerSource: 'AUTH' })
    } else {
      setLoading(false)
    }
  }

  const setCustomer = async ({ customerSource }) => {
    setLoading(true)

    const res = await API.setCustomer({
      variables: { input: { customerSource } },
    })

    if (res.data.setCustomer.customer) {
      dispatch({
        type: 'SET_CUSTOMER',
        payload: res.data.setCustomer.customer,
      })
    } else {
      throw new Error('Failed to intialize customer')
    }
  }

  const setShipping = async ({ input }) => {
    setLoading(true)
    const res = await API.setShipping({
      variables: { customerId: state.customer.id, input },
    })
    dispatch({
      type: 'SET_SHIPPING',
      payload: res.data.setShipping.customer,
    })
  }

  const setIntent = async (intent) => {
    setLoading(true)
    if (!intent) {
      try {
        const res = await API.setIntent({
          variables: { customerId: state.customer.id },
        })
        dispatch({
          type: 'SET_INTENT',
          payload: res.data.setIntent.setupIntent,
        })
      } catch (e) {
        dispatch({
          type: 'SET_ERROR',
          payload: 'Failed to create setupIntent',
        })
      }
    } else {
      dispatch({
        type: 'SET_INTENT',
        payload: intent,
      })
    }
  }

  const placeOrder = async ({ paymentMethodId }) => {
    setLoading(true)
    try {
      const res = await API.placeOrder({
        variables: {
          input: {
            customerId: state.customer.id,
            customerEmail: state.customer.email,
            paymentMethodId,
            cart,
          },
        },
      })

      if (res.data.placeOrder.paymentIntent.status === 'succeeded') {
        clearCart()
        dispatch({
          type: 'PLACE_ORDER',
          payload: res.data.placeOrder.paymentIntent,
        })
      } else {
        throw new Error('PaymentIntent status not succeeded')
      }
    } catch (e) {
      setLoading(false)
      dispatch({
        type: 'SET_ERROR',
        payload: e.message || 'Error placing payment',
      })
    }
  }

  const setPhase = (phase) => {
    dispatch({
      type: 'SET_PHASE',
      payload: phase,
    })
  }

  return (
    <CheckoutContext.Provider
      value={{
        checkout: state,
        initCheckout,
        setCustomer,
        setShipping,
        setIntent,
        placeOrder,
        setPhase,
        dispatch,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
