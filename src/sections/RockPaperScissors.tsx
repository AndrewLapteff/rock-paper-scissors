import Hand from '../components/Hand'
import { useAppContext } from '../context/AppContext'
import { Actions } from '../context/reducers/reducerActions'
import s from './RockPaperScissors.module.css'

const RockPaperScissors = () => {
  const context = useAppContext()
  const selectedHand = context.state.playerHand
  console.log(selectedHand)
  const hands = context.hands.map((hand) => {
    return (
      <Hand
        onClick={() => {
          context.dispatch({
            payload: hand.name,
            type: Actions.CHOOSE_THE_HAND,
          })
        }}
        selected={selectedHand}
        icon={hand.icon}
        name={hand.name}
        key={hand.name}
      />
    )
  })
  return (
    <div className={s.container}>
      <div className={s.hands}>{hands}</div>
      <button className={s.playBtn}>Play</button>
    </div>
  )
}

export default RockPaperScissors
