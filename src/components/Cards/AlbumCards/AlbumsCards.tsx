import React, { useState } from 'react';
import { useStateProvider } from '../../../utils/StateProvider';
import { ISearchAlbum } from '../../Search/Search.props';

import { FaArrowRight, FaArrowDown } from 'react-icons/fa';

import styles from './AlbumsCards.module.scss';

export const AlbumsCards = () => {
  const cardFit = Math.floor((window.innerWidth - 96) / 235);

  const [{ searchAlbumsInfo }] = useStateProvider();
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [viewCard, setViewCard] = useState(cardFit);
  const [cardExtends, setCardExtends] = useState(false);

  function entendsCards() {
    console.log(`extends`);
    if (cardExtends) {
      setViewCard(cardFit);
    } else {
      setViewCard(searchAlbumsInfo.length);
    }
    setCardExtends(!cardExtends);
  }
  return (
    <div className={styles.slider}>
      <span className={styles.header}>
        <a href='#'>Albums</a>
        <button onClick={entendsCards}>
          {!cardExtends ? (
            <FaArrowRight className={styles.extendBtn} />
          ) : (
            <FaArrowDown className={styles.extendBtn} />
          )}
        </button>
      </span>
      <span>
        <ul className={styles.cards}>
          {searchAlbumsInfo.map(
            (
              {
                type,
                id,
                name,
                artists,
                images,
                album_type,
                release_date,
                total_tracks,
              }: ISearchAlbum,
              i: number
            ) => {
              return (
                <span key={id}>
                  {i < viewCard && (
                    <li
                      key={id}
                      className={`${styles.card} ${
                        activeCardIndex === i ? styles.active : ''
                      }`}
                    >
                      <img
                        src={images[0].url}
                        alt='imageAlbums'
                        className={styles.imageCard}
                      />

                      <div className={styles.cardInfo}>
                        <h1>{name}</h1>
                        <h3>{artists[0].name}</h3>
                      </div>
                    </li>
                  )}
                </span>
              );
            }
          )}
        </ul>
      </span>
    </div>
  );
};
