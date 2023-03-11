import React from 'react';
import styles from './ArtistsCards.module.scss';
import { ISearchArtists } from '../../Search/Search.props';
import { useStateProvider } from '../../../utils/StateProvider';

export const ArtistCards = () => {
  const [{ searchArtistsInfo }] = useStateProvider();

  return (
    <div>
      <h1>Artists : </h1>
      <ul>
        {searchArtistsInfo.map(
          ({ type, id, name, images, genres }: ISearchArtists) => {
            return (
              <li key={id} className={styles.albumItem}>
                <img
                  src={images[0]?.url}
                  alt='imageAlbums'
                  className={styles.imageItem}
                />
                <span className={styles.albumInfo}>
                  <h1>{name}</h1>
                  <h3>{type}</h3>
                  <p>{genres}</p>
                </span>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
