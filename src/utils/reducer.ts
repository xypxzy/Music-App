import { IPlaylistItem } from '../components/Playlist/Playlist';
import { IUserInfo } from '../layouts/Header/Header.props';
import { reducerCases } from './Constants';

export interface IState {
  token: string | null;
  playlists: IPlaylistItem[];
  userInfo: IUserInfo | null;
}
export const initialState: IState = {
  token: null,
  playlists: [],
  userInfo: null,
};

export type Action = {
  type: 'SET_TOKEN' | 'SET_PLAYLISTS' | 'SET_USER';
  token: string;
  playlists: IPlaylistItem[];
  userInfo: IUserInfo;
};

const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN:
      return { ...state, token: action.token };
    case reducerCases.SET_PLAYLISTS:
      return { ...state, playlists: action.playlists };
    case reducerCases.SET_USER:
      return { ...state, userInfo: action.userInfo };
    default:
      return state;
  }
};

export default reducer;
