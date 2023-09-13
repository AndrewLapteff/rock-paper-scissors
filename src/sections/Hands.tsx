import Hand from '../components/Hand'
import { useAppContext } from '../context/AppContext'
import { ActionOptions } from '../context/reducers/reducerActions'
import { randomHandOptions } from '../utils/randomHand'
import s from './Hands.module.css'

const RockPaperScissors = () => {
  const { dispatch, state, hands } = useAppContext()
  const selectedHand = state.playerHand
  const handsOnThePage = hands.map((hand) => {
    return (
      <Hand
        onClick={() => {
          dispatch({
            payload: hand.name,
            type: ActionOptions.CHOOSE_THE_PLAYERS_HAND,
          })
        }}
        selected={selectedHand}
        icon={hand.icon}
        name={hand.name}
        key={hand.name}
      />
    )
  })

  const play = () => {
    dispatch({
      type: ActionOptions.CHOOSE_THE_COMPUTERS_HAND,
      payload: randomHandOptions(),
    })
    dispatch({ type: ActionOptions.SET_TIMER, payload: true })
  }

  return (
    <div className={s.container}>
      <div className={s.hands}>{handsOnThePage}</div>
      <button
        disabled={selectedHand === '' ? true : false}
        onClick={play}
        className={s.playBtn}
      >
        Play
      </button>
    </div>
  )
}

export default RockPaperScissors
