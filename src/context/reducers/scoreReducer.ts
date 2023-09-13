import { ActionTypes, ActionOptions } from "./reducerActions"
import { StateType } from "./StateType"

export function scoreReducer(state: StateType, action: ActionTypes) {
  const { type, payload } = action
  switch (type) {
    case ActionOptions.CHOOSE_THE_PLAYERS_HAND: {
      return { ...state, playerHand: payload }
    }
    case ActionOptions.CHOOSE_THE_COMPUTERS_HAND: {
      return { ...state, computerHand: payload }
    }
    case ActionOptions.SET_TIMER: {
      return { ...state, runTimer: payload }
    }
    case ActionOptions.PLAYER_WON: {
      return { ...state, winner: 'Player', score: { ...state.score, player: state.score.player + 1 } }
    }
    case ActionOptions.COMPUTER_WON: {
      return { ...state, winner: 'Computer', score: { ...state.score, computer: state.score.computer + 1 } }
    }
    case ActionOptions.TIE: {
      return { ...state, winner: 'Tie' }
    }
  }
}