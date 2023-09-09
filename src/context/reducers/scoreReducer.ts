import { IAction, Actions } from "./reducerActions"
import { StateType } from "./StateType"

export function scoreReducer(state: StateType, action: IAction) {
  const { type, payload } = action
  switch (type) {
    case Actions.CHOOSE_THE_HAND: {
      return { ...state, playerHand: payload }
    }
  }
}