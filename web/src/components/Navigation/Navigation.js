import { routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import LogoutBtn from 'src/components/LogoutBtn/LogoutBtn'
import { Navbar } from '../UI/Navigation/NavBar'
import { Navlink } from '../UI/Navigation/NavLink'

const Navigation = () => {
  const { isAuthenticated } = useAuth()
  const sideMenu = isAuthenticated ? (
    <>
      <Navlink to={routes.account()}>Account</Navlink>
      <LogoutBtn />
    </>
  ) : (
    <>
      <Navlink to={routes.signUp()}>Sign Up</Navlink>
      <Navlink to={routes.signIn()}>Log In</Navlink>
    </>
  )
  return (
    <header>
      <Navbar utilitySection={sideMenu}>
        <Navlink to="/">Projects</Navlink>
        <Navlink to="/about">About</Navlink>
      </Navbar>
    </header>
  )
}

export default Navigation
