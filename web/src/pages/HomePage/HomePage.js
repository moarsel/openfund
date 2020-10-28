import { Link, routes } from '@redwoodjs/router'
import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'
import ProjectsCell from 'src/components/Projects/ProjectsCell'

const HomePage = () => {
  return (
    <GlobalLayout>
      <h1>HomePage</h1>
      <p>
        <ProjectsCell />
      </p>
      <p>
        My default route is named <tt>home</tt>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </GlobalLayout>
  )
}

export default HomePage
