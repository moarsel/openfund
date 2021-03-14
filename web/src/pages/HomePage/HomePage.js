import ProjectsCell from 'src/components/Projects/ProjectsCell'
import { Body, PageHeading } from 'src/components/UI'
import { Link } from '@redwoodjs/router'
import { GlobalLayout } from 'src/layouts'
import BasicLayout from 'src/layouts/BasicLayout/BasicLayout'

const HomePage = () => {
  return (
    <GlobalLayout>
      <section className="flex flex-row items-center justify-center pt-36 pb-28 bg-purple-darkest">
        <div className="m-6">
          <PageHeading className="text-white">
            $75,000 & A Brand New Way To Sustain Open Source
          </PageHeading>
          <Body className="text-white" withMargins>
            What is this? Explainer + Friendly Illustration - $100k distributed
            to OSS Projects. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Vestibulum lobortis laoreet posuere. Nulla laoreet nisl ut
            malesuada pharetra.
          </Body>
          <Link className="hover:underline text-green" to="/about">
            {' '}
            Learn More about Democratic Funding
          </Link>
          <Body className="text-white" withMargins>
            Brought to you by:
          </Body>
        </div>
      </section>
      <BasicLayout>
        <ProjectsCell />
      </BasicLayout>
    </GlobalLayout>
  )
}

export default HomePage
