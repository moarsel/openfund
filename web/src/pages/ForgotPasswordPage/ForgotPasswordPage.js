import { useState } from 'react'
import { Form, TextField as RWTextField, FieldError } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

import { GlobalLayout } from 'src/layouts'
import { FormField, PageHeading, Button, TextField } from 'src/components/UI'

const ForgotPasswordPage = () => {
  const { client } = useAuth()
  const [formError, setFormError] = useState(null)
  const [formLoading, setFormLoading] = useState(false)

  const onSubmit = (data) => {
    setFormLoading(true)
    setFormError(null)
    client
      .requestPasswordRecovery(data.email)
      .then(() => {
        navigate(routes.resetPassword())
      })
      .catch((error) => {
        setFormError(error.message)
        setFormLoading(false)
      })
  }

  return (
    <GlobalLayout>
      <PageHeading>Recover Password</PageHeading>
      <p>
        Please enter your email to receive instructions for resetting your
        password.
      </p>
      <Form onSubmit={onSubmit} validation={{ mode: 'onBlur' }}>
        {formError && <p className="form-error">{formError}</p>}
        <FormField
          label="Email"
          description={<FieldError name="email" className="field-error" />}
        >
          <TextField
            as={RWTextField}
            name="email"
            validation={{
              required: 'Email is required.',
              pattern: {
                value: /[^@]+@[^.]+\..+/,
                message: 'Please enter a valid email address',
              },
            }}
          />
        </FormField>
        <Button type="submit" disabled={formLoading}>
          Submit
        </Button>
      </Form>
    </GlobalLayout>
  )
}

export default ForgotPasswordPage
