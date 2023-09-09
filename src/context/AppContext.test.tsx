import { render, screen } from '@testing-library/react'
import { ContextProvider, useAppContext } from './AppContext'
import { vi } from 'vitest'

vi.mock('./reducers/initialState', () => {
  return {
    initialState: {
      playerHand: 'rock',
      computerHand: 'paper',
      winner: 'player',
      score: {
        computer: 0,
        player: 1,
      },
    },
  }
})

const Test = () => {
  const context = useAppContext()
  return (
    <>
      <div>playerHand: {context.state.playerHand}</div>
      <div>computerHand: {context.state.computerHand}</div>
      <div>winner: {context.state.winner}</div>
    </>
  )
}

describe('AppContext', () => {
  it('should render the components with the initial values', () => {
    render(
      <ContextProvider>
        <Test />
      </ContextProvider>
    )
    expect(screen.getByText(/playerHand: rock/i)).toBeInTheDocument()
    expect(screen.getByText(/computerHand: paper/i)).toBeInTheDocument()
    expect(screen.getByText(/winner: player/i)).toBeInTheDocument()
  })
})
