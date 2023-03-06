import { reducerCases } from './Constants';

export interface IState {
  token: string | null;
}
export const initialState: IState = {
  token: null,
};

export type Action = { type: 'SET_TOKEN'; token: string };

const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};

export default reducer;
