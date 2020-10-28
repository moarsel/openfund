import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import LogoutBtn from 'src/components/LogoutBtn/LogoutBtn'

const Navigation = () => {
  const { isAuthenticated } = useAuth()
  return (
    <header>
      <nav>
        {isAuthenticated ? (
          <LogoutBtn />
        ) : (
          <>
            <Link to={routes.signUp()}>Sign Up</Link>
            <Link to={routes.signIn()}>Log In</Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default Navigation
