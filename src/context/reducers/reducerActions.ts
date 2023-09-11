export enum ActionOptions {
  CHOOSE_THE_PLAYERS_HAND = 'CHOOSE_THE_PLAYERS_HAND',
  CHOOSE_THE_COMPUTERS_HAND = 'CHOOSE_THE_COMPUTERS_HAND',
  SET_TIMER = 'SET_TIMER',
  PLAYER_WON = 'PLAYER_WON',
  COMPUTER_WON = 'COMPUTER_WON',
  TIE = 'TIE'
}

interface ChoosePlayersHandAction {
  type: ActionOptions.CHOOSE_THE_PLAYERS_HAND
  payload: string
}
interface ChooseComputersHandAction {
  type: ActionOptions.CHOOSE_THE_COMPUTERS_HAND
  payload: string
}
interface SetTimer {
  type: ActionOptions.SET_TIMER
  payload: boolean
}
interface PlayerWon {
  type: ActionOptions.PLAYER_WON
  payload?: number
}
interface ComputerWon {
  type: ActionOptions.COMPUTER_WON
  payload?: number
}
interface Tie {
  type: ActionOptions.TIE
  payload?: number
}

export type ActionTypes =
  ChoosePlayersHandAction |
  ChooseComputersHandAction |
  SetTimer |
  PlayerWon |
  ComputerWon |
  Tie