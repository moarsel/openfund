import { AuthProvider } from '@redwoodjs/auth'
import GoTrue from 'gotrue-js'
import netlifyIdentity from 'netlify-identity-widget'
import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'

import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

const goTrueClient = new GoTrue({
  APIUrl: 'https://silly-hypatia-fa017a.netlify.app/.netlify/identity',
  setCookie: true,
})

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={goTrueClient} type="goTrue">
      <RedwoodProvider>
        <Routes />
      </RedwoodProvider>
    </AuthProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
