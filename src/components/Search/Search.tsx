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
import { reducerCases } from '../../utils/Constants';
import { Input } from '../Input/Input';
import { AlbumsCards } from '../Cards/AlbumCards/AlbumsCards';
import { ArtistCards } from '../Cards/ArtistsCards/ArtistsCards';
import { TracksCards } from '../Cards/TracksCards/TracksCards';

export const Search = ({ ...props }: SearchProps) => {
  const [{ token, searchInputCommmit }, dispatch] = useStateProvider();
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
        ({ type, id, name, artists, images, href }: ISearchTracks) => {
          return {
            type,
            id,
            name,
            artists,
            images,
            href,
          };
        }
      );
      dispatch({ type: reducerCases.SET_SEARCHTRACKSINFO, searchTracksInfo });
    };
    getSearchInfo();
  }, [token, dispatch, searchInputCommmit]);

  return (
    <div {...props}>
      <div className={styles.searchedItem}>
        {searchInputCommmit && (
          <>
            {/* <TracksCards /> */}
            <AlbumsCards />
            <ArtistCards />
          </>
        )}
      </div>
    </div>
  );
};
