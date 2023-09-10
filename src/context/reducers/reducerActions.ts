export enum Actions {
  CHOOSE_THE_PLAYERS_HAND = 'CHOOSE_THE_PLAYERS_HAND',
  CHOOSE_THE_COMPUTERS_HAND = 'CHOOSE_THE_COMPUTERS_HAND',
  SET_TIMER = 'SET_TIMER'
}

interface ChoosePlayersHandAction {
  type: Actions.CHOOSE_THE_PLAYERS_HAND
  payload: string
}
interface ChooseComputersHandAction {
  type: Actions.CHOOSE_THE_COMPUTERS_HAND
  payload: string
}
interface SetTimer {
  type: Actions.SET_TIMER
  payload: boolean
}

export type IAction = ChoosePlayersHandAction | ChooseComputersHandAction | SetTimer