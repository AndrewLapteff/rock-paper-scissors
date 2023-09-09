import Hand from '../components/Hand'
import { useAppContext } from '../context/AppContext'
import { Actions } from '../context/reducers/reducerActions'
import { randomHandOptions } from '../utils/randomHand'
import s from './RockPaperScissors.module.css'

const RockPaperScissors = () => {
  const { dispatch, state, hands } = useAppContext()
  const selectedHand = state.playerHand
  const handsOnThePage = hands.map((hand) => {
    return (
      <Hand
        onClick={() => {
          dispatch({
            payload: hand.name,
            type: Actions.CHOOSE_THE_PLAYERS_HAND,
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
      type: Actions.CHOOSE_THE_COMPUTERS_HAND,
      payload: randomHandOptions(),
    })
  }

  return (
    <div className={s.container}>
      <div className={s.hands}>{handsOnThePage}</div>
      <button onClick={play} className={s.playBtn}>
        Play
      </button>
    </div>
  )
}

export default RockPaperScissors
