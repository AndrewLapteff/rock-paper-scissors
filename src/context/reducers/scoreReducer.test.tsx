import { render, screen } from '@testing-library/react'
import { useReducer, useEffect, FC } from 'react'
import { scoreReducer } from './scoreReducer'
import { initialState } from './initialState'
import { ActionOptions, ActionTypes } from './reducerActions'
import { HandsOptions } from '../AppContextTypes'

interface Props {
  action: ActionTypes
}

const Test: FC<Props> = ({ action }) => {
  const [state, dispatch] = useReducer(scoreReducer, initialState)
  useEffect(() => {
    dispatch(action)
  }, [])

  return (
    <>
      <div>Winner: {state.winner}</div>
      <div>{state.playerHand}</div>
      <div>{state.computerHand}</div>
    </>
  )
}

describe('Score reducer', () => {
  it('should render correct player hand value (rock)', () => {
    render(
      <Test
        action={{
          type: ActionOptions.CHOOSE_THE_PLAYERS_HAND,
          payload: HandsOptions.rock,
        }}
      />
    )
    expect(screen.getByText(/rock/i)).toBeInTheDocument()
  })

  it('should render correct computer hand value (rock)', () => {
    render(
      <Test
        action={{
          type: ActionOptions.CHOOSE_THE_COMPUTERS_HAND,
          payload: HandsOptions.rock,
        }}
      />
    )
    expect(screen.getByText(/rock/i)).toBeInTheDocument()
  })

  it('should render that the player has won', () => {
    render(
      <Test
        action={{
          type: ActionOptions.PLAYER_WON,
        }}
      />
    )
    expect(screen.getByText('Winner: Player')).toBeInTheDocument()
  })

  it('should render that the computer has won', () => {
    render(
      <Test
        action={{
          type: ActionOptions.COMPUTER_WON,
        }}
      />
    )
    expect(screen.getByText('Winner: Computer')).toBeInTheDocument()
  })

  it('should render tie', () => {
    render(
      <Test
        action={{
          type: ActionOptions.TIE,
        }}
      />
    )
    expect(screen.getByText('Winner: Tie')).toBeInTheDocument()
  })
})
