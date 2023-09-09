export enum Actions {
  CHOOSE_THE_PLAYERS_HAND = 'CHOOSE_THE_PLAYERS_HAND',
  CHOOSE_THE_COMPUTERS_HAND = 'CHOOSE_THE_COMPUTERS_HAND'
}

interface ChoosePlayersHandAction {
  type: Actions.CHOOSE_THE_PLAYERS_HAND
  payload: string
}

interface ChooseComputersHandAction {
  type: Actions.CHOOSE_THE_COMPUTERS_HAND
  payload: string
}

export type IAction = ChoosePlayersHandAction | ChooseComputersHandAction