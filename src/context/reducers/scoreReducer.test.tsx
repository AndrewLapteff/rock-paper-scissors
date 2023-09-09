import { render, screen } from '@testing-library/react'
import { useReducer, useEffect, FC } from 'react'
import { scoreReducer } from './scoreReducer'
import { initialState } from './initialState'
import { Actions } from './reducerActions'
import { HandsOptions } from '../AppContextTypes'

interface Action {
  type: Actions
  payload: string
}
interface Props {
  action: Action
}

const Test: FC<Props> = ({ action }) => {
  const [state, dispatch] = useReducer(scoreReducer, initialState)
  useEffect(() => {
    dispatch(action)
  }, [])

  return (
    <>
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
          type: Actions.CHOOSE_THE_PLAYERS_HAND,
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
          type: Actions.CHOOSE_THE_COMPUTERS_HAND,
          payload: HandsOptions.rock,
        }}
      />
    )
    expect(screen.getByText(/rock/i)).toBeInTheDocument()
  })
})
