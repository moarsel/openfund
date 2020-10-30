import { Link, routes, navigate } from '@redwoodjs/router'

import { GlobalLayout } from 'src/layouts'
import { useSignIn, SignInForm } from 'src/components/SignIn'
import { PageHeading } from 'src/components/UI'

const SignInPage = () => {
  const { onSubmit, loading, error } = useSignIn({
    onComplete: () => {
      navigate(routes.home())
    },
  })

  return (
    <GlobalLayout>
      <div className="flex items-center justify-center px-4 py-8 bg-gray-50 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <PageHeading className="mb-5">Log In</PageHeading>
          <SignInForm onSubmit={onSubmit} loading={loading} error={error} />
          <div className="my-6">
            <Link to={routes.forgotPassword()}>Forgot password?</Link>
          </div>
        </div>
      </div>
    </GlobalLayout>
  )
}

export default SignInPage
