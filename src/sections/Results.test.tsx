import { act, render, screen } from '@testing-library/react'
import { ContextProvider } from '../context/AppContext'
import Results from './Results'
import RockPaperScissors from './RockPaperScissors'
import { fireEvent } from '@testing-library/react'
import { vi } from 'vitest'

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
})
