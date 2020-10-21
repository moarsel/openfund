import { Link, routes } from '@redwoodjs/router'
import ProjectCell from 'src/components/Projects/ProjectsCell'
const ProjectPage = () => {
  return (
    <>
      <h1>ProjectPage</h1>
      <ProjectCell />
      <p>
        My default route is named <tt>project</tt>, link to me with `
        <Link to={routes.project()}>Project</Link>`
      </p>
    </>
  )
}

export default ProjectPage
