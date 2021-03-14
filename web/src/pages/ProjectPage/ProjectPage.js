import ProjectCell from 'src/components/Project/ProjectCell'
import ProjectsCell from 'src/components/Projects/ProjectsCell'
import { Lead, Body } from 'src/components/UI'
import { GlobalLayout } from 'src/layouts'
import BasicLayout from 'src/layouts/BasicLayout/BasicLayout'

const ProjectPage = ({ id }) => {
  return (
    <GlobalLayout>
      <ProjectCell id={id} />
      <BasicLayout className="mt-12">
        <section>
          <Lead as="h2" className="pt-12">
            Similar Projects
          </Lead>
          <Body withMargins className="mb-12">
            People who have People who’ve backed Dark Reader have also backed
            these projects...
          </Body>
          <ProjectsCell />
        </section>
      </BasicLayout>
    </GlobalLayout>
  )
}

export default ProjectPage
