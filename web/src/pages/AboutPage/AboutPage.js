import { PageHeading, Body, Lead } from 'src/components/UI'
import { GlobalLayout } from 'src/layouts'

const AboutPage = () => {
  return (
    <GlobalLayout>
      <PageHeading className="mt-8 mb-5">What is this?</PageHeading>
      <Body withMargins>
        RxC OpenFund takes QF to incentivize and govern funding for the{' '}
        <a className="underline" href="https://radicalxchange.org/">
          RadicalxChange Foundation
        </a>
        . It allows people to contribute to their favorite RxC projects, e.g.
        conferences, fellowships, hackathons or podcasts. These contributions
        are matched by a fund from RadicalxChange Foundation.
      </Body>
      <Body withMargins>
        In doing so, the QF formula prioritizes projects based on the number of
        individual contributions, not only on the size of the contributions.
      </Body>
      <Lead withMargins>Why?</Lead>
      <Body withMargins>
        In the traditional nonprofit funding model, individual contributions are
        made without a specific purpose and the expenditure of funds is subject
        to decisions made by the central recipient.
      </Body>
      <Body withMargins>
        In turn, Quadratic Funding (QF) is a more democratic and scalable method
        to fund public goods like the work of a nonprofit organization.
      </Body>
      <Body withMargins>
        We hope that a RxC Quadratic Funding program helps RadicalxChange
        Foundation to attract more contributions from the RxC community and at
        the same time, allocates our budget to projects that reflect the
        community needs.
      </Body>
      <Lead>Can I contribute?</Lead>
      <Body withMargins>
        Yes! Please reach out to{' '}
        <a href="mailto:matt@radicalxchange.org?subject='OpenFund Contribution Inquiry'">
          RadicalxChange Foundation
        </a>{' '}
        to back the next round
      </Body>

      <Body withMargins>
        Learn more about QF at{' '}
        <a className="underline" href="https://wtfisqf.com/">
          WTF is QF
        </a>
        .
      </Body>
    </GlobalLayout>
  )
}

export default AboutPage
