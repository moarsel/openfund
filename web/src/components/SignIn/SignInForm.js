import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
} from '@redwoodjs/forms'

import { Loader } from '../UI'
import { Button } from '../UI/Button/Button'

export const SignInForm = ({ onSubmit, loading, error }) => (
  <Form
    onSubmit={onSubmit}
    validation={{ mode: 'onBlur' }}
    className="space-y-4 has-block-loader"
  >
    {loading && <Loader type="BLOCK" />}
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
      <Button type="submit" disabled={loading}>
        Log In
      </Button>
    </div>
  </Form>
)
