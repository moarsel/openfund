import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '@redwoodjs/auth'
import { routes, navigate } from '@redwoodjs/router'
import {
  Form,
  FormError,
  Label,
  TextField,
  PasswordField,
  FieldError,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

import { GlobalLayout, SimpleLayout } from 'src/layouts'
import { PageHeading } from 'src/components/UI'
import { Button } from 'src/components/UI/Button/Button'

export const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

const SignUpPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })
  const currentPassword = formMethods.watch('password', '')
  const { client } = useAuth()
  const [formError, setFormError] = useState(null)
  const [formLoading, setFormLoading] = useState(false)

  const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: () => {
      navigate(routes.confirmEmail())
    },
  })

  const signup = (data) => {
    client
      .signup(data.email, data.password)
      .then((res) => {
        // create db user
        createUser({
          variables: { input: { email: data.email, authId: res.id } },
        })
      })
      .catch((error) => {
        setFormError(error.message)
        setFormLoading(false)
      })
  }

  const onSubmit = (data) => {
    setFormError(null)
    setFormLoading(true)
    signup(data)
  }
  return (
    <GlobalLayout>
      <SimpleLayout>
        <PageHeading className="mb-5">Sign Up</PageHeading>
        <Form
          formMethods={formMethods}
          onSubmit={onSubmit}
          className="space-y-4"
        >
          {formError && <p className="form-error">{formError}</p>}
          <FormError
            error={error}
            wrapperClassName="form-error-wrapper"
            titleClassName="form-error-title"
            listClassName="form-error-list"
          />
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
            <Label name="password" errorClassName="label-error">
              Password
            </Label>
            <PasswordField
              name="password"
              validation={{
                required: 'Password is required.',
                minLength: {
                  value: 6,
                  message: 'Password must have at least 6 characters',
                },
              }}
              errorClassName="input-error"
            />
            <FieldError name="password" className="field-error" />
          </div>
          <div className="field">
            <Label name="passwordConfirmation" errorClassName="label-error">
              Confirm Password
            </Label>
            <PasswordField
              name="passwordConfirmation"
              validation={{
                required: 'Password Confirmation is required.',
                validate: (value) =>
                  value === currentPassword || 'The passwords do not match.',
              }}
              errorClassName="input-error"
            />
            <FieldError name="passwordConfirmation" className="field-error" />
          </div>
          <div className="field">
            <Button type="submit" disabled={(formLoading || loading) && !error}>
              Sign Up
            </Button>
          </div>
        </Form>
      </SimpleLayout>
    </GlobalLayout>
  )
}

export default SignUpPage
