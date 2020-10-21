import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout/MainLayout'

const LoginPage = () => {
  const { logIn } = useAuth()
  const [error, setError] = React.useState(null)

  const onSubmit = (data) => {
    setError(null)
    logIn({ email: data.email, password: data.password, remember: true })
      .then(() => navigate(routes.home()))
      .catch((error) => setError(error.message))
  }

  return (
    <MainLayout>
      <h1>Sign In</h1>
      <Form onSubmit={onSubmit}>
        {error && <p>{error}</p>}
        <TextField name="email" placeholder="email" />
        <PasswordField name="password" placeholder="password" />
        <Submit>Sign In</Submit>
      </Form>
    </MainLayout>
  )
}

export default LoginPage
