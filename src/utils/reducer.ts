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
  searchInputCommmit: string | null;
  currentlyPlaying: string | null;
  playerState: boolean;
}
export const initialState: IState = {
  token: null,
  playlists: [],
  userInfo: null,
  searchAlbumsInfo: [],
  searchTracksInfo: [],
  searchArtistsInfo: [],
  searchInputCommmit: null,
  currentlyPlaying: null,
  playerState: false,
};

export type Action = {
  type:
    | 'SET_TOKEN'
    | 'SET_PLAYLISTS'
    | 'SET_USER'
    | 'SET_PLAYING'
    | 'SET_PLAYER_STATE'
    | 'SET_SEARCHTRACKSINFO'
    | 'SET_SEARCHARTISTSINFO'
    | 'SET_SEARCHALBUMSINFO'
    | 'SET_SEARCHINPUTCOMMIT';
  token: string;
  playlists: IPlaylistItem[];
  userInfo: IUserInfo;
  searchAlbumsInfo: ISearchAlbum[];
  searchTracksInfo: ISearchTracks[];
  searchArtistsInfo: ISearchArtists[];
  searchInputCommmit: string;
  currentlyPlaying: string;
  playerState: boolean;
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
    case reducerCases.SET_SEARCHINPUTCOMMIT:
      return { ...state, searchInputCommmit: action.searchInputCommmit };
    case reducerCases.SET_PLAYING:
      return { ...state, currentlyPlaying: action.currentlyPlaying };
    case reducerCases.SET_PLAYER_STATE:
      return { ...state, playerState: action.playerState };
    default:
      return state;
  }
};

export default reducer;
