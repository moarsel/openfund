import { AuthProvider } from '@redwoodjs/auth'
import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { CartProvider } from 'src/components/Cart/CartContext'

import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'
import { goTrueClient } from 'src/lib/goTrue'

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={goTrueClient} type="goTrue">
      <RedwoodProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </RedwoodProvider>
    </AuthProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
