import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import ProjectsCell from 'src/components/ProjectsCell'

const HomePage = () => {
  return (
    <MainLayout>
      <h1>HomePage</h1>
      <p>
        <ProjectsCell />
      </p>
      <p>
        My default route is named <tt>home</tt>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </MainLayout>
  )
}

export default HomePage
