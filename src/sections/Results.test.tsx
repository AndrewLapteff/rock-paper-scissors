import { act, render, screen } from '@testing-library/react'
import { ContextProvider } from '../context/AppContext'
import Results from './Results'
import RockPaperScissors from './RockPaperScissors'
import { fireEvent } from '@testing-library/react'
import { vi } from 'vitest'

vi.mock('../utils/randomHand', () => ({
  randomHandOptions: () => 'Scissors',
}))

vi.mock('./Results.module.css', () => {
  return {
    default: {
      playerWinnerAnimation: 'playerWinnerAnimation',
    },
  }
})

describe('Results', () => {
  it('should render 2 seconds on the screen after we wait 1 second', () => {
    vi.useFakeTimers()
    render(
      <ContextProvider>
        <Results />
        <RockPaperScissors />
      </ContextProvider>
    )
    const hand = screen.getByText('Rock')
    const playBtn = screen.getByText('Play')
    fireEvent.click(hand)
    fireEvent.click(playBtn)
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByTestId('timer')).toHaveTextContent('2')
  })

  it('should render 1 second on the screen after we wait 2 seconds', () => {
    vi.useFakeTimers()
    render(
      <ContextProvider>
        <Results />
        <RockPaperScissors />
      </ContextProvider>
    )
    const hand = screen.getByText('Rock')
    const playBtn = screen.getByText('Play')
    fireEvent.click(hand)
    fireEvent.click(playBtn)
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(screen.getByTestId('timer')).toHaveTextContent('1')
  })

  it('should render that player won after 3 seconds', () => {
    vi.useFakeTimers()

    render(
      <ContextProvider>
        <Results />
        <RockPaperScissors />
      </ContextProvider>
    )

    fireEvent.click(screen.getByText('Rock'))
    fireEvent.click(screen.getByText('Play'))

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByTestId('winner')).toHaveTextContent(/Player/)
    expect(
      screen.getAllByTestId(/paperHand|rockHand|scissorsHand/)[0]
    ).toBeVisible()
  })

  it('should render that computer won after 3 seconds', () => {
    vi.useFakeTimers()

    render(
      <ContextProvider>
        <Results />
        <RockPaperScissors />
      </ContextProvider>
    )

    fireEvent.click(screen.getByText('Paper'))
    fireEvent.click(screen.getByText('Play'))

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByTestId('winner')).toHaveTextContent(/Computer/)
    expect(
      screen.getAllByTestId(/paperHand|rockHand|scissorsHand/)[0]
    ).toBeVisible()
  })

  it('should render that it was tie after 3 seconds', () => {
    vi.useFakeTimers()

    render(
      <ContextProvider>
        <Results />
        <RockPaperScissors />
      </ContextProvider>
    )

    fireEvent.click(screen.getByText('Scissors'))
    fireEvent.click(screen.getByText('Play'))

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByTestId('winner')).toHaveTextContent(/Tie/)
    expect(
      screen.getAllByTestId(/paperHand|rockHand|scissorsHand/)[0]
    ).toBeVisible()
  })

  it("shouldn't display shaking hands initially and should display shaking hands while timer is running", () => {
    vi.useFakeTimers()

    render(
      <ContextProvider>
        <Results />
        <RockPaperScissors />
      </ContextProvider>
    )

    expect(screen.queryByTestId('playerShakingHand')).not.toBeInTheDocument()
    expect(screen.queryByTestId('computerShakingHand')).not.toBeInTheDocument()

    fireEvent.click(screen.getByText('Rock'))
    fireEvent.click(screen.getByText('Play'))

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(screen.queryByTestId('playerShakingHand')).toBeInTheDocument()
    expect(screen.queryByTestId('computerShakingHand')).toBeInTheDocument()
  })

  it("should displays player's winner animation", () => {
    vi.useFakeTimers()

    render(
      <ContextProvider>
        <Results />
        <RockPaperScissors />
      </ContextProvider>
    )

    fireEvent.click(screen.getByText('Rock'))
    fireEvent.click(screen.getByText('Play'))

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    screen.debug()
    expect(screen.getByTestId(/playersHandAfterTimerGone/)).toHaveClass(
      'playerWinnerAnimation'
    )
  })
})
