import React, { useEffect, useState } from 'react';
import { useStateProvider } from '../../utils/StateProvider';
import {
  ISearchAlbum,
  ISearchArtists,
  ISearchTracks,
  SearchProps,
} from './Search.props';

import styles from './Search.module.scss';
import axios from 'axios';
import { Header } from '../../layouts/Header/Header';
import { FaSearch } from 'react-icons/fa';
import { reducerCases } from '../../utils/Constants';
import { AlbumsCards, TracksCards } from '../Cards/Cards';
import { Input } from '../Input/Input';

export const Search = ({ ...props }: SearchProps) => {
  const [{ token, searchInputCommmit }, dispatch] = useStateProvider();
  const [searchInput, setSearchInput] = useState<string>('');
  // const [searchInputCommmit, setSearchInputCommmit] = useState<string | null>(
  //   null
  // );
  const [searchStatus, setSearchStatus] = useState<boolean>(false);

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
      console.log(albums.items);

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
      dispatch({ type: reducerCases.SET_SEARCHTRACKSINFO, searchTracksInfo });
    };
    getSearchInfo();
  }, [token, dispatch, searchInputCommmit]);

  //Search
  // function search() {
  //   console.log('Search for ' + searchInput);
  //   setSearchInputCommmit(searchInput);
  // }

  // function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setSearchInput(e.target.value);
  // }

  return (
    <div {...props}>
      <div className={styles.searchInformation}>
        {/* <span className={styles.search_bar}>
          <FaSearch />
          <input
            type='text'
            placeholder='Find a song or artist'
            onKeyDown={(e) => {
              if (e.key == 'Enter') {
                search();
                setSearchStatus(true);
              }
            }}
            onChange={handleInputChange}
          />
        </span> */}
        <Input />
        <div className={styles.searchedItem}>
          {searchInputCommmit && <AlbumsCards />}
        </div>
      </div>
    </div>
  );
};
