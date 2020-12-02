import { useCheckout } from 'src/components/Checkout'

import { SignInForm } from '../SignIn/SignInForm'
import { useSignIn } from '../SignIn/hooks'
import { Lead, Loader } from '../UI'
import { SignUpForm, useSignUp } from '../SignUp'
// import { navigate, routes } from '@redwoodjs/router'
import { useState } from 'react'

export const SetCustomer = () => {
  const [mode, setMode] = useState('signup')
  const { setCustomer } = useCheckout()
  const { onSubmit, loading, error } = useSignIn({
    onComplete: () => setCustomer({ customerSource: 'AUTH' }),
  })

  const signup = useSignUp({
    onComplete: () => {
      return setCustomer({ customerSource: 'AUTH' })
      // not needed if netlify autoconfirm is set to no
      // navigate(routes.confirmEmail())
    },
  })

  if (loading) {
    return <Loader type="BLOCK" />
  }

  return (
    <div id="form-top" className="max-w-lg mr-4">
      <Lead as="h2" withMargins>
        Sign up or Log in
      </Lead>
      {mode === 'login' && (
        <div id="form-login" className="options-item options-item-signin">
          <SignInForm onSubmit={onSubmit} loading={loading} error={error} />
        </div>
      )}
      {mode === 'signup' && (
        <div id="form-signup" className="options-item options-item-signin">
          <SignUpForm
            onSubmit={(data) => signup.onSubmit(data)}
            loading={signup.loading}
            error={signup.error}
          />
        </div>
      )}
      <div className="mt-2">
        {mode === 'login' ? (
          <button
            className="my-3 font-medium text-gray-900 uppercase whitespace-nowrap text-md"
            onClick={() => setMode('signup')}
          >
            or Sign Up
          </button>
        ) : (
          <button
            className="my-3 font-medium text-gray-900 uppercase whitespace-nowrap text-md"
            onClick={() => setMode('login')}
          >
            or Log in
          </button>
        )}
      </div>
    </div>
  )
}
