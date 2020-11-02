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

  const [createUser] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: onComplete,
  })

  const onSubmit = (data) => {
    setState({ formError: null, formLoading: true })
    client
      .signup(data.email, data.password)
      .then((res) => {
        // create db user
        createUser({
          variables: { input: { email: data.email, authId: res.id } },
        })
        return logIn({
          email: data.email,
          password: data.password,
          remember: true,
        })
      })
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
