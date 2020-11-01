import { useCheckout } from 'src/components/Checkout'

import { SignInForm } from '../SignIn/SignInForm'
// import { SignUpForm } from '../SignUp/SignUpForm'
import { useSignIn } from '../SignIn/hooks'
import { Lead, Loader } from '../UI'
import { SignUpForm, useSignUp } from '../SignUp'
import { navigate, routes } from '@redwoodjs/router'
import { useState } from 'react'

export const SetCustomer = () => {
  const [mode, setMode] = useState('signup')
  const { setCustomer } = useCheckout()
  const { onSubmit, loading, error } = useSignIn({
    onComplete: () => setCustomer({ customerSource: 'AUTH' }),
  })

  const signup = useSignUp({
    onComplete: () => {
      setCustomer({ customerSource: 'AUTH' })
      navigate(routes.confirmEmail())
    },
  })

  if (loading) {
    return <Loader type="BLOCK" />
  }

  return (
    <div id="form-top" className="max-w-lg mr-4">
      <Lead as="h2" withMargins>
        Log In or Sign Up
      </Lead>
      {mode === 'login' && (
        <div id="form-login" className="options-item options-item-signin">
          <SignInForm onSubmit={onSubmit} loading={loading} error={error} />
        </div>
      )}
      {mode === 'signup' && (
        <div id="form-signup" className="options-item options-item-signin">
          <SignUpForm
            onSubmit={signup.onSubmit}
            loading={signup.loading}
            error={signup.error}
          />
        </div>
      )}
      <div className="mt-2">
        {/* TODO: fix refocus on top of form */}
        {mode === 'login' ? (
          <a
            href="#form-login"
            className="my-3 font-medium text-gray-900 uppercase whitespace-no-wrap text-md"
            onClick={() => setMode('signup')}
          >
            or Sign Up
          </a>
        ) : (
          <button
            className="my-3 font-medium text-gray-900 uppercase whitespace-no-wrap text-md"
            onClick={() => setMode('login')}
          >
            or Log in
          </button>
        )}
      </div>
    </div>
  )
}
