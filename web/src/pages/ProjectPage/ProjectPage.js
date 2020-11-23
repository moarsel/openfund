import ProjectCell from 'src/components/Project/ProjectCell'
import ProjectsCell from 'src/components/Projects/ProjectsCell'
import { Lead } from 'src/components/UI'
import { GlobalLayout } from 'src/layouts'

const ProjectPage = ({ id }) => {
  return (
    <GlobalLayout>
      <ProjectCell id={id} />
      <section className="mt-12">
        <Lead as="h2" className="pt-12 mb-6">
          More Projects
        </Lead>
        <ProjectsCell />
      </section>
    </GlobalLayout>
  )
}

export default ProjectPage
