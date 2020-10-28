import { Link, routes, navigate } from '@redwoodjs/router'
import ProjectCell from 'src/components/Project/ProjectCell'

const ProjectPage = ({ id }) => {
  return (
    <>
      <h1>ProjectPage</h1>
      <ProjectCell id={id} />
    </>
  )
}

export default ProjectPage
