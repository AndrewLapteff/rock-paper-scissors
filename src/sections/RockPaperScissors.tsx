import Hand from '../components/Hand'
import s from './RockPaperScissors.module.css'

import {
  FaRegHandPaper,
  FaRegHandRock,
  FaRegHandScissors,
} from 'react-icons/fa'

const RockPaperScissors = () => {
  return (
    <div className={s.container}>
      <div className={s.hands}>
        <Hand name="rock" icon={<FaRegHandRock size={60} />} />
        <Hand name="paper" icon={<FaRegHandPaper size={60} />} />
        <Hand name="scissors" icon={<FaRegHandScissors size={60} />} />
      </div>
      <button className={s.playBtn}>Play</button>
    </div>
  )
}

export default RockPaperScissors
