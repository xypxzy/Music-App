import { IPlaylistItem } from '../components/Playlist/Playlist';
import { reducerCases } from './Constants';

export interface IState {
  token: string | null;
  playlists: IPlaylistItem[];
}
export const initialState: IState = {
  token: null,
  playlists: [],
};

export type Action = {
  type: 'SET_TOKEN' | 'SET_PLAYLISTS';
  token: string;
  playlists: IPlaylistItem[];
};

const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN:
      return { ...state, token: action.token };
    case reducerCases.SET_PLAYLISTS:
      return { ...state, playlists: action.playlists };
    default:
      return state;
  }
};

export default reducer;
