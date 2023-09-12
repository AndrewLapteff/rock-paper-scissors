import { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import s from './Results.module.css'
import { ActionOptions } from '../context/reducers/reducerActions'
import { determineTheWinner } from '../utils/determineTheWinner'

const Results = () => {
  const { state, hands, dispatch } = useAppContext()
  const { runTimer } = state
  const [time, setTime] = useState<number>(3)
  const [playersHandDisplay, setPlayersHandDisplay] = useState<string>('')

  const timeSpent = () => {
    setTime(3)
    dispatch({ type: ActionOptions.SET_TIMER, payload: false })
    determineTheWinner(dispatch, state.playerHand, state.computerHand)
    setPlayersHandDisplay(state.playerHand)
    dispatch({ type: ActionOptions.CHOOSE_THE_PLAYERS_HAND, payload: '' })
  }

  useEffect(() => {
    if (runTimer) {
      const interval = setInterval(() => {
        setTime((prev) => {
          if (prev === 1) {
            clearInterval(interval)
          }
          return prev - 1
        })
      }, 1000)
    }
  }, [runTimer])

  useEffect(() => {
    if (time === 0) {
      timeSpent()
    }
  }, [time])

  return (
    <div className={s.container}>
      <div className={s.player}>
        <div className={s.score}>Score</div>
        <div className={s.title}>Player: {state.score.player}</div>
        <div className={s.playerHand}>
          {runTimer && (
            <div
              data-testid="playerShakingHand"
              className={`${s.playerShakingHand}`}
            >
              {hands[1].icon}
            </div>
          )}
          {!runTimer && state.winner && (
            <div
              data-testid="playersHandAfterTimerGone"
              className={`${!runTimer ? s.flipped : ''} ${
                state.winner == 'Player' ? `${s.winnerAnimation2}` : ''
              }`}
            >
              {hands.map((hand) =>
                hand.name == playersHandDisplay ? hand.icon : null
              )}
            </div>
          )}
        </div>
      </div>
      <div className={s.middleColumn}>
        {runTimer && (
          <p className={s.timer} data-testid="timer">
            {time}
          </p>
        )}
        {!runTimer && state.winner && (
          <p className={s.winner} data-testid="winner">
            {state.winner}
          </p>
        )}
      </div>
      <div className={s.computer}>
        <div className={s.score}>Score</div>
        <div className={s.title}>Computer: {state.score.computer}</div>
        <div className={s.computerHand}>
          {runTimer && (
            <div
              data-testid="computerShakingHand"
              className={`${s.computerShakingHand}`}
            >
              {hands[1].icon}
            </div>
          )}
          {!runTimer && state.winner && (
            <div
              data-testid="computersHandAfterTimerGone"
              className={`${
                state.winner == 'Computer' ? `${s.winnerAnimation1}` : ''
              }`}
            >
              {hands.map((hand) =>
                hand.name == state.computerHand ? hand.icon : null
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Results
