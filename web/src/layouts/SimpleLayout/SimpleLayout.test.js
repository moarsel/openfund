import { render } from '@redwoodjs/testing'

import SimpleLayout from './SimpleLayout'

describe('SimpleLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SimpleLayout />)
    }).not.toThrow()
  })
})
