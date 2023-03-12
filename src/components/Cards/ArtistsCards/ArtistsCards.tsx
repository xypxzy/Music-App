import React, { useState } from 'react';
import styles from './ArtistsCards.module.scss';
import { ISearchArtists } from '../../Search/Search.props';

import { useStateProvider } from '../../../utils/StateProvider';

import { FaArrowRight, FaArrowDown } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

export const ArtistCards = () => {
  const cardFit = Math.floor((window.innerWidth - 96) / 150);
  const [{ searchArtistsInfo }] = useStateProvider();
  const [viewCard, setViewCard] = useState(cardFit);
  const [cardExtends, setCardExtends] = useState(false);

  function entendsCards() {
    console.log(`extends`);
    if (cardExtends) {
      setViewCard(cardFit);
    } else {
      setViewCard(searchArtistsInfo.length);
    }
    setCardExtends(!cardExtends);
  }
  return (
    <div className={styles.artists}>
      <span className={styles.header}>
        <a>Artists : </a>
        <button onClick={entendsCards}>
          {!cardExtends ? (
            <FaArrowRight className={styles.extendBtn} />
          ) : (
            <FaArrowDown className={styles.extendBtn} />
          )}
        </button>
      </span>
      <ul className={styles.cards}>
        {searchArtistsInfo.map(
          ({ id, name, images }: ISearchArtists, i: number) => {
            return (
              <span key={id}>
                {i < viewCard && (
                  <li key={id} className={styles.card}>
                    {images[0]?.url ? (
                      <img
                        src={images[0]?.url}
                        alt='imageAlbums'
                        className={styles.imageItem}
                      />
                    ) : (
                      <CgProfile className={styles.profile} />
                    )}

                    <span className={styles.cardInfo}>
                      <h1>{name}</h1>
                    </span>
                  </li>
                )}
              </span>
            );
          }
        )}
      </ul>
    </div>
  );
};
