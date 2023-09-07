export enum Actions {
  CHOOSE_THE_HAND = 'CHOOSE_THE_HAND'
}

interface ChooseHandAction {
  type: Actions.CHOOSE_THE_HAND
  payload: string
}

export type IAction = ChooseHandAction 