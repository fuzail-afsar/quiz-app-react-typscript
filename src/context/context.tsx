import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { initialState, InitialStateType, mainReducer } from "./reducers";
import { ActionsType } from "./types";

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ActionsType>;
}>({ state: initialState, dispatch: () => null });

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { useAppContext, AppProvider };
