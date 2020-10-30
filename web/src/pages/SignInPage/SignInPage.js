import { Link, routes, navigate } from '@redwoodjs/router'

import { GlobalLayout, SimpleLayout } from 'src/layouts'
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
      <SimpleLayout>
        <PageHeading className="mb-5">Log In</PageHeading>
        <SignInForm onSubmit={onSubmit} loading={loading} error={error} />
        <div className="my-6">
          <Link to={routes.forgotPassword()}>Forgot password?</Link>
        </div>
      </SimpleLayout>
    </GlobalLayout>
  )
}

export default SignInPage
