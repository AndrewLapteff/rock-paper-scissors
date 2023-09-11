import { ActionOptions, ActionTypes } from "../context/reducers/reducerActions"

export const determineTheWinner = (
  dispatch: React.Dispatch<ActionTypes>,
  playerHand: string,
  computerHand: string
) => {
  if (
    playerHand === 'Rock' && computerHand === 'Scissors' ||
    playerHand === 'Scissors' && computerHand === 'Paper' ||
    playerHand === 'Paper' && computerHand === 'Rock'
  ) {
    dispatch({ type: ActionOptions.PLAYER_WON, payload: 1 })
  }
  if (
    computerHand === 'Rock' && playerHand === 'Scissors' ||
    computerHand === 'Scissors' && playerHand === 'Paper' ||
    computerHand === 'Paper' && playerHand === 'Rock'
  ) {
    dispatch({ type: ActionOptions.COMPUTER_WON, payload: 1 })
  }
  if (
    computerHand === 'Rock' && playerHand === 'Rock' ||
    computerHand === 'Scissors' && playerHand === 'Scissors' ||
    computerHand === 'Paper' && playerHand === 'Paper'
  ) {
    dispatch({ type: ActionOptions.TIE, payload: 0 })
  }
}