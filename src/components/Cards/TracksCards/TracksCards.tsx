import React from 'react';
import styles from './TracksCards.module.scss';
import { useStateProvider } from '../../../utils/StateProvider';
import { ISearchTracks } from '../../Search/Search.props';

export const TracksCards = () => {
  const [{ searchTracksInfo, searchAlbumsInfo }] = useStateProvider();
  console.log(searchTracksInfo);
  let i = 0;
  return (
    <div>
      <h1>Tracks</h1>
      <ul>
        {searchTracksInfo.map(
          ({ type, id, name, artists, images, href }: ISearchTracks) => {
            return (
              <li key={id} className={styles.tracksItem}>
                {images && (
                  <img
                    src={searchAlbumsInfo.items[i].images[0]?.url}
                    alt='imageAlbums'
                    className={styles.imageItem}
                  />
                )}
                <span className={styles.tracksInfo}>
                  <a href={href}>
                    {name} - {artists[0]?.name}
                  </a>
                </span>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
