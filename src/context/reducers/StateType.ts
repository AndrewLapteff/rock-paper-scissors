interface IScore {
  player: number
  computer: number
}

export interface StateType {
  playerHand: string
  computerHand: string
  winner: string
  score: IScore
}