import React, { useState } from 'react';
import { useStateProvider } from '../../../utils/StateProvider';
import { ISearchAlbum } from '../../Search/Search.props';

import styles from './AlbumsCards.module.scss';

export const AlbumsCards = () => {
  const [{ searchAlbumsInfo }] = useStateProvider();
  const [activeCard, setActiveCard] = useState(false);
  function handleActiveCard() {
    setActiveCard(!activeCard);
  }
  return (
    <div>
      <h1>Albums </h1>
      <ul className={styles.albums}>
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
              <li
                key={id}
                className={styles.albumItem}
                onClick={handleActiveCard}
              >
                <img
                  src={images[0].url}
                  alt='imageAlbums'
                  className={styles.imageItem}
                />
                {activeCard && (
                  <>
                    <div className={styles.albumInfo}>
                      <span className={styles.mainInfo}>
                        <h1>{name}</h1>
                        <h3>{artists[0].name}</h3>
                      </span>
                      <span className={styles.secondaryInfo}>
                        <p>{release_date}</p>
                        <p>{total_tracks}</p>
                        {/* <p className={styles.album_type}>{album_type}</p> */}
                      </span>
                    </div>
                  </>
                )}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
