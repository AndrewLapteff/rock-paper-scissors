import { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import s from './Results.module.css'
import { Actions } from '../context/reducers/reducerActions'

const Results = () => {
  const { state, dispatch } = useAppContext()
  const { runTimer } = state
  const [time, setTime] = useState<number>(3)
  useEffect(() => {
    if (runTimer) {
      const interval = setInterval(() => {
        setTime((prev) => {
          if (prev === 1) {
            clearInterval(interval)
            dispatch({ type: Actions.SET_TIMER, payload: false })
            setTime(3)
          }
          return prev - 1
        })
      }, 1000)
    }
  }, [runTimer])
  return (
    <div className={s.container}>
      <div className={s.player}>
        <div className={s.score}>Score</div>
        <div className={s.title}>Player</div>
        <div className={s.playerHand}></div>
      </div>
      <div className={s.timer}>
        {runTimer && <p data-testid="timer">{time}</p>}
      </div>
      <div className={s.computer}>
        <div className={s.score}>Score</div>
        <div className={s.title}>Computer</div>
        <div className={s.computerHand}></div>
      </div>
    </div>
  )
}

export default Results
