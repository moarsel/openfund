import { GlobalLayout, SimpleLayout } from 'src/layouts'
import { PageHeading } from 'src/components/UI'
import { SignUpForm, useSignUp } from 'src/components/SignUp'

const SignUpPage = () => {
  const { onSubmit, loading, error } = useSignUp()
  return (
    <GlobalLayout>
      <SimpleLayout>
        <PageHeading className="mb-5">Sign Up</PageHeading>
        <SignUpForm
          onSubmit={onSubmit}
          loading={loading}
          error={error}
        ></SignUpForm>
      </SimpleLayout>
    </GlobalLayout>
  )
}

export default SignUpPage
