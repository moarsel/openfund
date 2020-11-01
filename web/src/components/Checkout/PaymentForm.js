import { useState, useEffect } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { Form, Label } from '@redwoodjs/forms'

import { CARD_ELEMENT_OPTIONS } from 'src/lib/stripe'
import { useCheckout, PHASE } from 'src/components/Checkout'

import { Lead, Loader } from '../UI'
import { Button } from '../UI/Button/Button'

export const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const { checkout, setIntent, placeOrder, setPhase } = useCheckout()
  const [state, setState] = useState({
    loading: false,
    error: null,
  })

  useEffect(() => {
    setIntent()
  }, [])

  useEffect(() => {
    if (checkout.error) {
      setState((state) => ({
        ...state,
        error: checkout.error,
        loading: false,
      }))
    } else {
      setState((state) => ({ ...state, error: null, loading: false }))
    }
  }, [checkout.error])

  const onSubmit = async () => {
    if (!stripe || !elements) {
      setState({
        ...state,
        error: "Stripe hasn't loaded yet. Please try again.",
        loading: false,
      })
      return
    }
    setState({ ...state, error: null, loading: true })

    if (checkout.setupIntent.status === 'requires_payment_method') {
      const cardElement = elements.getElement(CardElement)
      const { error, setupIntent } = await stripe.confirmCardSetup(
        checkout.setupIntent.clientSecret,
        {
          payment_method: {
            card: cardElement,
          },
        },
        { handleActions: false }
      )

      if (error) {
        setState({ ...state, error: error.message, loading: false })
      } else if (checkout.setupIntent.status === 'requires_action') {
        setState({ ...state, loading: true })
      } else {
        setIntent(setupIntent)
        placeOrder({
          paymentMethodId: setupIntent.payment_method,
        })
      }
    } else {
      setState({ ...state, loading: false })

      placeOrder({
        paymentMethodId: checkout.setupIntent.payment_method,
      })
    }
  }

  return (
    <Form onSubmit={onSubmit} className="mr-4 space-y-4 has-block-loader ">
      {state.loading && <Loader type="BLOCK" />}
      {state.error && <p className="form-error">{state.error}</p>}
      <Lead as="h2">Payment Method</Lead>
      <div className="field">
        <Label>Card</Label>
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </div>
      <p>Test card: 4242 4242 4242 4242 : 04/24 : 242 : 42424</p>
      <p className="text-small">
        By clicking &ldquo;Submit order and pay&rdquo; below you authorize us to
        send instructions to the financial institution that issued your card to
        take payment from your account.
      </p>
      <div className="flex flex-wrap items-start">
        <Button
          variant="secondary"
          className="mb-3 mr-3"
          onClick={() => setPhase(PHASE.SET_SHIPPING)}
        >
          Back to Billing Details
        </Button>
        <Button type="submit" disabled={state.loading}>
          Submit Order and Pay
        </Button>
      </div>
    </Form>
  )
}
