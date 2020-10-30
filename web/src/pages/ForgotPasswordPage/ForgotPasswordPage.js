import { useState } from 'react'
import { Form, Label, TextField, FieldError } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

import { GlobalLayout } from 'src/layouts'
import { PageHeading } from 'src/components/UI'
import { Button } from 'src/components/UI/Button/Button'

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
      <Form
        onSubmit={onSubmit}
        validation={{ mode: 'onBlur' }}
        className="space-y-4"
      >
        {formError && <p className="form-error">{formError}</p>}

        <div className="field">
          <Label name="email" errorClassName="label-error">
            Email
          </Label>
          <TextField
            name="email"
            validation={{
              required: 'Email is required.',
              pattern: {
                value: /[^@]+@[^.]+\..+/,
                message: 'Please enter a valid email address',
              },
            }}
            errorClassName="input-error"
          />
          <FieldError name="email" className="field-error" />
        </div>
        <div className="field">
          <Button type="submit" disabled={formLoading}>
            Submit
          </Button>
        </div>
      </Form>
    </GlobalLayout>
  )
}

export default ForgotPasswordPage
