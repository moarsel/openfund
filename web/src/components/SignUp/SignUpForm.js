import {
  Form,
  TextField as RWTextField,
  PasswordField,
  FieldError,
} from '@redwoodjs/forms'
import { useForm } from 'react-hook-form'

import { Button, TextField, FormField } from '../UI/'
import { Loader } from '../UI/Loader/Loader'

export const SignUpForm = ({ onSubmit, loading, error }) => {
  const formMethods = useForm({ mode: 'onBlur' })
  const currentPassword = formMethods.watch('password', '')

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      {error && <p className="form-error">{error}</p>}
      {loading && <Loader type="BLOCK" />}
      <FormField
        label="Email"
        description={<FieldError name="email" className="field-error" />}
      >
        <TextField
          as={RWTextField}
          autoFocus
          name="email"
          validation={{
            required: 'Email is required.',
            pattern: {
              value: /[^@]+@[^.]+\..+/,
              message: 'Please enter a valid email address',
            },
          }}
          required
        />
      </FormField>
      <FormField
        label="Password"
        description={<FieldError name="password" className="field-error" />}
      >
        <PasswordField
          name="password"
          className="form-input"
          validation={{
            required: 'Password is required.',
            minLength: {
              value: 6,
              message: 'Password must have at least 6 characters',
            },
          }}
          required
          minLength={6}
        />
      </FormField>
      <FormField
        label="Confirm Password"
        description={
          <FieldError name="passwordConfirmation" className="field-error" />
        }
      >
        <PasswordField
          className="form-input"
          name="passwordConfirmation"
          validation={{
            required: 'Password Confirmation is required.',
            validate: (value) =>
              value === currentPassword || 'The passwords do not match.',
          }}
          required
        />
      </FormField>

      <Button type="submit" disabled={loading && !error}>
        Sign Up
      </Button>
    </Form>
  )
}
