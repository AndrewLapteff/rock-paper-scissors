import { ActionTypes } from "./reducers/reducerActions"
import { StateType } from "./reducers/StateType"

export enum HandsOptions {
  paper = 'Paper',
  rock = 'Rock',
  scissors = 'Scissors',
}

export interface IHands {
  name: HandsOptions
  icon: JSX.Element
}

export interface IContext {
  hands: IHands[]
  state: StateType,
  dispatch: React.Dispatch<ActionTypes>
}

export interface ContextProviderProps {
  children: React.ReactNode
}