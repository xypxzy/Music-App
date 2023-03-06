// import { createContext, useContext, useReducer } from 'react';
// //@ts-ignore
// export const StateContext = createContext();
// export const StateProvider = ({ children, initialState, reducer: any }) => {
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>;
// };

import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Reducer,
} from 'react';

type StateProviderProps = {
  children: ReactNode;
  initialState: any;
  reducer: Reducer<any, any>;
};

export const StateContext = createContext<[any, React.Dispatch<any>]>([
  {},
  () => {},
]);

export const StateProvider = ({
  children,
  initialState,
  reducer,
}: StateProviderProps) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateProvider = () => useContext(StateContext);
