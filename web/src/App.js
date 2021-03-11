import { AuthProvider } from '@redwoodjs/auth'
import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import { CartProvider } from 'src/components/Cart/CartContext'

import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'
import { goTrueClient } from 'src/lib/goTrue'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={goTrueClient} type="goTrue">
      <RedwoodApolloProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </RedwoodApolloProvider>
    </AuthProvider>
  </FatalErrorBoundary>
)

export default App
