import { GlobalLayout } from 'src/layouts'
import { CheckoutProvider } from 'src/components/Checkout/CheckoutContext'
import { Body, Lead, PageHeading } from 'src/components/UI'
import { Link, routes, useParams } from '@redwoodjs/router'

const OrdersPage = () => {
  const { id } = useParams()
  return (
    <GlobalLayout>
      <CheckoutProvider>
        <PageHeading>Thank you!</PageHeading>
        <Lead className="mb-4">Your contribution was received. </Lead>
        <Body withMargins>
          You should receive an email receipt shortly. Your confirmation code is{' '}
          <strong>{id}</strong>.
        </Body>
        <Body withMargins>
          You may also view your{' '}
          <Link className="underline" to={routes.account()}>
            contribution history
          </Link>
          , or contribute to more{' '}
          <Link className="underline" to={routes.home()}>
            projects
          </Link>
          .
        </Body>
      </CheckoutProvider>
    </GlobalLayout>
  )
}

export default OrdersPage
