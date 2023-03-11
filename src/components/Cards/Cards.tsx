import React from 'react';
import styles from './Cards.module.scss';
import { useStateProvider } from '../../utils/StateProvider';
import { ISearchAlbum } from '../Search/Search.props';
export const AlbumsCards = () => {
  const [{ searchAlbumsInfo, searchArtistsInfo, searchTracksInfo }] =
    useStateProvider();

  console.log(searchAlbumsInfo);

  return (
    <div>
      <ul>
        {searchAlbumsInfo.map(
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
              <li key={id} className={styles.albumItem}>
                <img
                  src={images[0].url}
                  alt='imageAlbums'
                  className={styles.imageItem}
                />
                <span className={styles.albumInfo}>
                  <h1>{name}</h1>
                  <h3>{artists[0].name}</h3>
                  <p>{release_date}</p>
                  <p>{total_tracks}</p>
                  <p>{album_type}</p>
                </span>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
export const TracksCards = () => {
  return <div></div>;
};
export const ArtistCards = () => {
  return <div></div>;
};
