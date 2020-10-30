import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'
import ProjectsCell from 'src/components/Projects/ProjectsCell'
import { PageHeading } from 'src/components/UI'

const HomePage = () => {
  return (
    <GlobalLayout>
      <PageHeading className="mt-8 mb-3">Projects</PageHeading>
      <ProjectsCell />
    </GlobalLayout>
  )
}

export default HomePage
