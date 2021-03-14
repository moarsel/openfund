import { PageHeading, Body, Lead } from 'src/components/UI'
import { GlobalLayout, SimpleLayout } from 'src/layouts'

const AboutPage = () => {
  return (
    <GlobalLayout>
      <SimpleLayout>
        <PageHeading className="mt-8 mb-5">What is this?</PageHeading>
        <Body withMargins>
          FundOSS is a collaboration between Gitcoin and Open Source Collective
          to fund more projects using democratic funding.
        </Body>
        <Body withMargins>
          Democratic funding prioritizes projects based on the number of
          individual contributions, not just on the size of the contributions.
        </Body>
        <Lead withMargins>Why?</Lead>
        <Body withMargins>
          We hope that the program helps attract more contributions from the
          community and at the same time, allocates budget to projects that
          better reflect the community needs.
        </Body>
        <Lead>Can I contribute?</Lead>
        <Body withMargins>
          Yes! Please reach out to{' '}
          <a className="underline" href="#">
            FundOSS
          </a>{' '}
          to back the next round.
        </Body>

        <Body withMargins>
          Learn more about QF at{' '}
          <a className="underline" href="https://wtfisqf.com/">
            WTF is QF
          </a>
          .
        </Body>
      </SimpleLayout>
    </GlobalLayout>
  )
}

export default AboutPage
