import { FC, createContext, useContext, useReducer } from 'react'
import {
  FaRegHandPaper,
  FaRegHandRock,
  FaRegHandScissors,
} from 'react-icons/fa'
import { HandsOptions, IContext, ContextProviderProps } from './AppContextTypes'
import { scoreReducer } from './reducers/scoreReducer'
import { initialState } from './reducers/initialState'

const hands = [
  {
    name: HandsOptions.paper,
    icon: <FaRegHandPaper data-testid="paperHand" size={60} />,
  },
  {
    name: HandsOptions.rock,
    icon: <FaRegHandRock data-testid="rockHand" size={60} />,
  },
  {
    name: HandsOptions.scissors,
    icon: <FaRegHandScissors data-testid="scissorsHand" size={60} />,
  },
]

export const AppContext = createContext<IContext>({
  hands: [],
  state: initialState,
  dispatch: () => {},
})
export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(scoreReducer, initialState)
  const context = {
    hands,
    state,
    dispatch,
  }

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
