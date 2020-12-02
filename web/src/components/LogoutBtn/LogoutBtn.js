import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

const SignoutBtn = () => {
  const { logOut } = useAuth()

  const onClick = () => {
    logOut().then(() => navigate(routes.home()))
  }

  return (
    <button
      className="px-3 py-2 font-medium text-gray-900 uppercase rounded-t-sm whitespace-nowrap text-md focus:outline-none focus:text-gray-900 focus:bg-gray-300"
      onClick={() => onClick()}
    >
      Sign Out
    </button>
  )
}

export default SignoutBtn
