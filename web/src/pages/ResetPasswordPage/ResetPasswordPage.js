import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '@redwoodjs/auth'
import { useParams, navigate, routes } from '@redwoodjs/router'
import { Form, PasswordField, FieldError, Submit } from '@redwoodjs/forms'

import { GlobalLayout, SimpleLayout } from 'src/layouts'
import { FormField, TextField, PageHeading } from 'src/components/UI'

const ResetPasswordPage = () => {
  const { client } = useAuth()
  const { token } = useParams()
  const [tokenError, setTokenError] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState(null)
  const [formLoading, setFormLoading] = useState(false)
  const formMethods = useForm({ mode: 'onBlur' })
  const currentPassword = formMethods.watch('password', '')

  useEffect(() => {
    setLoading(true)
    if (token) {
      client
        .recover(token)
        .then(() => {
          setLoading(false)
          setUser(client.currentUser())
        })
        .catch((error) => {
          setLoading(false)
          setTokenError(error.message)
        })
    } else {
      setLoading(false)
    }
  }, [client, token])

  const onSubmit = (data) => {
    setFormLoading(true)
    setFormError(null)
    if (user) {
      user
        .update({ password: data.password })
        .then(() => {
          setFormLoading(false)
          navigate(routes.signIn())
        })
        .catch((error) => {
          setFormError(error.message)
          setFormLoading(false)
        })
    }
  }

  return (
    <GlobalLayout>
      <SimpleLayout>
        <PageHeading>Password Reset</PageHeading>
        {loading ? (
          <p>Loading...</p>
        ) : tokenError ? (
          <p>{tokenError}</p>
        ) : user ? (
          <Form formMethods={formMethods} onSubmit={onSubmit}>
            {formError && <p className="form-error">{formError}</p>}

            <FormField
              label="Password"
              description={
                <FieldError name="password" className="field-error" />
              }
            >
              <TextField
                as={PasswordField}
                name="password"
                validation={{
                  required: 'Password is required.',
                }}
              />
            </FormField>

            <FormField
              label="Confirm Password"
              description={
                <FieldError
                  name="passwordConfirmation"
                  className="field-error"
                />
              }
            >
              <TextField
                as={PasswordField}
                name="passwordConfirmation"
                validation={{
                  required: 'Password Confirmation is required.',
                  validate: (value) =>
                    value === currentPassword || 'The passwords do not match.',
                }}
              />
            </FormField>

            <Submit className="btn" disabled={formLoading}>
              Submit
            </Submit>
          </Form>
        ) : (
          <p>Password reset email sent. Please check your inbox.</p>
        )}
      </SimpleLayout>
    </GlobalLayout>
  )
}

export default ResetPasswordPage
