import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
} from '@redwoodjs/forms'
import { useForm } from 'react-hook-form'

import { Button } from '../UI/Button/Button'

export const SignUpForm = ({ onSubmit, loading, error }) => {
  const formMethods = useForm({ mode: 'onBlur' })
  const currentPassword = formMethods.watch('password', '')

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit} className="space-y-4">
      {error && <p className="form-error">{error}</p>}
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
        <Button type="submit" disabled={loading && !error}>
          Sign Up
        </Button>
      </div>
    </Form>
  )
}
