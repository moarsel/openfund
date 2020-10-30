import ProjectCell from 'src/components/Project/ProjectCell'
import { GlobalLayout } from 'src/layouts'

const ProjectPage = ({ id }) => {
  return (
    <GlobalLayout>
      <ProjectCell id={id} />
    </GlobalLayout>
  )
}

export default ProjectPage
