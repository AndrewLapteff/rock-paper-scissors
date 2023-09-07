import { IAction, Actions } from "./reducerActions"
import { StateType } from "./StateType"

export function reducer(state: StateType, action: IAction) {
  const { type, payload } = action
  switch (type) {
    case Actions.CHOOSE_THE_HAND: {
      console.log('choosed: ', payload)
      return { ...state, playerHand: payload }
    }
  }
}