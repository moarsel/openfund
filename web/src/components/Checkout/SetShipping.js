import { useState } from 'react'
import { Form, TextField as RWTextField, FieldError } from '@redwoodjs/forms'

import { useCheckout } from 'src/components/Checkout'
import { Button } from '../UI/Button/Button'
import { FormField, TextField, Lead } from '../UI'

export const SetShipping = () => {
  const { checkout, setShipping } = useCheckout()
  const [state, setState] = useState({
    loading: false,
    error: null,
  })

  const onSubmit = async (input) => {
    setState({ ...state, error: null, loading: true })
    setShipping({ input }).catch((error) => {
      setState({ ...state, error: error.message, loading: false })
    })
  }

  return (
    <Form
      onSubmit={onSubmit}
      validation={{ mode: 'onBlur' }}
      className="max-w-md"
    >
      {state.error && <p className="form-error">{state.error}</p>}
      <Lead as="h2">Billing Details</Lead>
      <FormField
        label="Name"
        description={<FieldError name="name" className="field-error" />}
      >
        <TextField
          as={RWTextField}
          name="name"
          placeholder="First Middle Last"
          defaultValue={checkout?.customer?.shipping?.name}
          validation={{
            required: 'Name is required',
          }}
        />
      </FormField>
      <FormField
        label="Phone Number"
        description={<FieldError name="phone" className="field-error" />}
      >
        <TextField
          as={RWTextField}
          name="phone"
          placeholder="1 (234)567-8910"
          defaultValue={checkout?.customer?.shipping?.phone}
          validation={{
            required: 'Phone is required',
          }}
        />
      </FormField>

      <FormField
        label="Street"
        description={<FieldError name="line1" className="field-error" />}
      >
        <TextField
          as={RWTextField}
          name="line1"
          placeholder="123 Short Circuit Drive"
          defaultValue={checkout?.customer?.shipping?.address?.line1}
          validation={{
            required: 'Street address is required',
          }}
        />
      </FormField>

      <FormField label="Unit">
        <TextField
          as={RWTextField}
          name="line2"
          defaultValue={checkout?.customer?.shipping?.address?.line2}
          placeholder="#5"
        />
      </FormField>
      <div className="flex items-end justify-between">
        <div>
          <FormField
            label="City"
            description={<FieldError name="city" className="field-error" />}
          >
            <TextField
              as={RWTextField}
              name="city"
              placeholder="Bishop"
              defaultValue={checkout?.customer?.shipping?.address?.city}
              validation={{
                required: 'City is required.',
              }}
            />
          </FormField>
        </div>
        <div>
          <FormField
            label="State"
            description={<FieldError name="state" className="field-error" />}
          >
            <TextField
              as={RWTextField}
              name="state"
              placeholder="AI"
              defaultValue={checkout?.customer?.shipping?.address?.state}
              validation={{
                required: 'State is required.',
              }}
            />
          </FormField>
        </div>
        <div>
          <FormField
            label="Postal Code"
            description={
              <FieldError name="postalCode" className="field-error" />
            }
          >
            <TextField
              as={RWTextField}
              name="postalCode"
              placeholder="W9 1ER"
              defaultValue={checkout?.customer?.shipping?.address?.postalCode}
              validation={{
                required: 'Postal Code is required.',
              }}
            />
          </FormField>
        </div>
      </div>
      <Button type="submit" className="mt-3" disabled={state.loading}>
        Next: Payment Method
      </Button>
    </Form>
  )
}
