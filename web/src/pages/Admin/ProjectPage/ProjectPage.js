import ProjectsLayout from 'src/layouts/ProjectsLayout'
import ProjectCell from 'src/components/Admin/ProjectCell'

const ProjectPage = ({ id }) => {
  return (
    <ProjectsLayout>
      <ProjectCell id={id} />
    </ProjectsLayout>
  )
}

export default ProjectPage
