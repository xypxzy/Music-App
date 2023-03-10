import { IPlaylistItem } from '../components/Playlist/Playlist';
import {
  ISearchAlbum,
  ISearchArtists,
  ISearchTracks,
} from '../components/Search/Search.props';
import { IUserInfo } from '../layouts/Header/Header.props';
import { reducerCases } from './Constants';

export interface IState {
  token: string | null;
  playlists: IPlaylistItem[];
  userInfo: IUserInfo | null;
  searchAlbumsInfo: ISearchAlbum[];
  searchTracksInfo: ISearchTracks[];
  searchArtistsInfo: ISearchArtists[];
}
export const initialState: IState = {
  token: null,
  playlists: [],
  userInfo: null,
  searchAlbumsInfo: [],
  searchTracksInfo: [],
  searchArtistsInfo: [],
};

export type Action = {
  type:
    | 'SET_TOKEN'
    | 'SET_PLAYLISTS'
    | 'SET_USER'
    | 'SET_SEARCHTRACKSINFO'
    | 'SET_SEARCHARTISTSINFO'
    | 'SET_SEARCHALBUMSINFO';
  token: string;
  playlists: IPlaylistItem[];
  userInfo: IUserInfo;
  searchAlbumsInfo: ISearchAlbum[];
  searchTracksInfo: ISearchTracks[];
  searchArtistsInfo: ISearchArtists[];
};

const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN:
      return { ...state, token: action.token };
    case reducerCases.SET_PLAYLISTS:
      return { ...state, playlists: action.playlists };
    case reducerCases.SET_USER:
      return { ...state, userInfo: action.userInfo };
    case reducerCases.SET_SEARCHALBUMSINFO:
      return { ...state, searchAlbumsInfo: action.searchAlbumsInfo };
    case reducerCases.SET_SEARCHTRACKSINFO:
      return { ...state, searchTracksInfo: action.searchTracksInfo };
    case reducerCases.SET_SEARCHARTISTSINFO:
      return { ...state, searchArtistsInfo: action.searchArtistsInfo };
    default:
      return state;
  }
};

export default reducer;
