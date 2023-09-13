import './App.css'
import styles from './App.module.css'
import Results from './sections/Results'
import RockPaperScissors from './sections/Hands'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>ROCK PAPER SCISSORS</h1>
      </div>
      <Results />
      <RockPaperScissors />
    </div>
  )
}

export default App
