import s from './Results.module.css'

const Results = () => {
  return (
    <div className={s.container}>
      <div className={s.player}>
        <div className={s.score}>Score</div>
        <div className={s.title}>Player</div>
        <div className={s.playerHand}></div>
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
