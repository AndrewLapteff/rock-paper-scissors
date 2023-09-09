import { render, screen } from '@testing-library/react'
import Hand from './Hand'
import { FaRegHandRock } from 'react-icons/fa'

describe('Hand button', () => {
  it('should render the hand selections component with the right props', () => {
    render(
      <Hand
        icon={<FaRegHandRock data-testid="rock" size={60} />}
        name="rock"
        selected="rock"
      />
    )
    expect(screen.getByText(/rock/i)).toBeInTheDocument()
    expect(screen.getByTestId(/rock/)).toBeVisible()
  })
})
