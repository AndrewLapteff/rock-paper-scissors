import { render, screen } from '@testing-library/react'
import { useReducer, useEffect } from 'react'
import { scoreReducer } from './scoreReducer'
import { initialState } from './initialState'
import { Actions } from './reducerActions'
import { HandsOptions } from '../AppContextTypes'

const Test = () => {
  const [state, dispatch] = useReducer(scoreReducer, initialState)
  useEffect(() => {
    dispatch({ type: Actions.CHOOSE_THE_HAND, payload: HandsOptions.rock })
  }, [])

  return <>{state.playerHand}</>
}

describe('Score reducer', () => {
  it('should render correct value (rock)', () => {
    render(<Test />)
    expect(screen.getByText(/rock/i)).toBeInTheDocument()
  })
})
