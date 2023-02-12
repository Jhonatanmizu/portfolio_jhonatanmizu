import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Home from './index'

test('home', () => {
  render(<Home />)
  const heading = within(screen.getByRole('heading', { name: /Learn about/ }))
  expect(heading).toBeDefined()
  expect(heading).toMatchSnapshot()
})
