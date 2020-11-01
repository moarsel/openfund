import { render } from '@redwoodjs/testing'

import AccountPage from './AccountPage'

describe('AccountPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AccountPage />)
    }).not.toThrow()
  })
})
