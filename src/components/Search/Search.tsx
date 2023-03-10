import React, { useEffect, useState } from 'react';
import { useStateProvider } from '../../utils/StateProvider';
import {
  IArtistInfo,
  ISearchAlbum,
  ISearchArtists,
  ISearchInfo,
  ISearchTracks,
  SearchProps,
} from './Search.props';

import styles from './Search.module.scss';
import axios from 'axios';
import { Header } from '../../layouts/Header/Header';
import { FaSearch } from 'react-icons/fa';
import { reducerCases } from '../../utils/Constants';

export const Search = ({ ...props }: SearchProps) => {
  const [
    { token, searchAlbumsInfo, searchArtistsInfo, searchTracksInfo },
    dispatch,
  ] = useStateProvider();
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchInputCommmit, setSearchInputCommmit] = useState<string | null>(
    null
  );
  const [searchStatus, setSearchStatus] = useState<boolean>(false);

  console.log(searchAlbumsInfo);

  useEffect(() => {
    const getSearchInfo = async () => {
      const { data } = await axios.get(
        'https://api.spotify.com/v1/search?q=' +
          searchInputCommmit +
          '&type=artist,track,album',
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(data);

      const { albums, artists, tracks } = data;
      const searchAlbumsInfo = albums.items.map(
        ({
          type,
          id,
          name,
          artists,
          images,
          album_type,
          release_date,
          total_tracks,
        }: ISearchAlbum) => {
          console.log(type, artists[0].name, release_date);

          return {
            type,
            id,
            name,
            artists,
            images,
            album_type,
            release_date,
            total_tracks,
          };
        }
      );
      dispatch({ type: reducerCases.SET_SEARCHALBUMSINFO, searchAlbumsInfo });
      const searchArtistsInfo = artists.items.map(
        ({ type, id, name, images, genres }: ISearchArtists) => {
          console.log(type, name, genres);
          return {
            type,
            id,
            name,
            images,
            genres,
          };
        }
      );
      dispatch({ type: reducerCases.SET_SEARCHARTISTSINFO, searchArtistsInfo });
      const searchTracksInfo = tracks.items.map(
        ({ type, id, name, artists, images, explicit }: ISearchTracks) => {
          console.log(type, artists[0].name, explicit);
          return {
            type,
            id,
            name,
            artists,
            images,
            explicit,
          };
        }
      );
      dispatch({ type: reducerCases.SET_SEARCHALBUMSINFO, searchTracksInfo });
    };
    getSearchInfo();
  }, [token, dispatch, searchInputCommmit]);

  //Search
  function search() {
    console.log('Search for ' + searchInput);
    setSearchInputCommmit(searchInput);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value);
  }

  return (
    <div {...props}>
      <div className={styles.searchInformation}>
        <span className={styles.search_bar}>
          <FaSearch />
          <input
            type='text'
            placeholder='Find a song or artist'
            onKeyPress={(e) => {
              if (e.key == 'Enter') {
                search();
              }
            }}
            onChange={handleInputChange}
          />
        </span>
        <ul>
          {searchAlbumsInfo &&
            searchAlbumsInfo.map(
              ({
                type,
                id,
                name,
                artists,
                images,
                album_type,
                release_date,
                total_tracks,
              }: ISearchAlbum) => {
                return (
                  <li key={id}>
                    <img src={images[0].url} alt='imgAlbum' />
                    <p>{name}</p>
                    <p>{artists[0].name}</p>
                  </li>
                );
              }
            )}
        </ul>
      </div>
    </div>
  );
};
