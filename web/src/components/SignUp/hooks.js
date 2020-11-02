import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

export const useSignUp = (
  { onComplete } = { onComplete: () => navigate(routes.confirmEmail()) }
) => {
  const { client, logIn } = useAuth()
  const [state, setState] = useState({
    formError: null,
    formLoading: false,
  })

  const [createUser] = useMutation(CREATE_USER_MUTATION)

  const onSubmit = (data) => {
    setState({ formError: null, formLoading: true })
    client
      .signup(data.email, data.password)
      .then((res) =>
        createUser({
          variables: { input: { email: data.email, authId: res.id } },
        })
      )
      .then(() =>
        logIn({
          email: data.email,
          password: data.password,
          remember: true,
        })
      )
      .then(onComplete)
      .catch((error) =>
        setState({ formError: error.message, formLoading: false })
      )
  }

  return {
    onSubmit,
    error: state.formError,
    loading: state.formLoading,
  }
}
