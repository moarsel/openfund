import {
  Form,
  TextField as RWTextField,
  PasswordField as RWPasswordField,
  FieldError,
} from '@redwoodjs/forms'

import { Loader, TextField, Button, FormField } from '../UI'

export const SignInForm = ({ onSubmit, loading, error }) => (
  <Form
    onSubmit={onSubmit}
    validation={{ mode: 'onBlur' }}
    className="has-block-loader"
  >
    {loading && <Loader type="BLOCK" />}
    <p className="form-error">{error}</p>
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
      />
    </FormField>
    <FormField
      label="Password"
      description={<FieldError name="password" className="field-error" />}
    >
      <TextField
        as={RWPasswordField}
        type="password"
        name="password"
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
    <Button type="submit" disabled={loading}>
      Log In
    </Button>
  </Form>
)
