import React, { useState } from 'react';
import styles from './TracksCards.module.scss';
import { useStateProvider } from '../../../utils/StateProvider';
import { ISearchTracks } from '../../Search/Search.props';

import { FaArrowRight, FaArrowDown } from 'react-icons/fa';

export const TracksCards = () => {
  const initialAmount: number = 5;
  const [{ searchTracksInfo, searchAlbumsInfo }] = useStateProvider();

  const [viewCard, setViewCard] = useState(initialAmount);
  const [cardExtends, setCardExtends] = useState(false);

  function entendsCards() {
    console.log(`extends`);
    if (cardExtends) {
      setViewCard(initialAmount);
    } else {
      setViewCard(searchAlbumsInfo.length);
    }
    setCardExtends(!cardExtends);
  }

  return (
    <div className={styles.cards}>
      <span className={styles.header}>
        <h1>Tracks :</h1>
        <button onClick={entendsCards}>
          {!cardExtends ? (
            <FaArrowRight className={styles.extendBtn} />
          ) : (
            <FaArrowDown className={styles.extendBtn} />
          )}
        </button>
      </span>
      <ul>
        {searchTracksInfo.map(
          (
            { type, id, name, artists, images, href }: ISearchTracks,
            i: number
          ) => {
            return (
              <span key={id}>
                {i < viewCard && (
                  <li key={id} className={styles.cardTracks}>
                    <span className={styles.cardInfo}>
                      <p>{i + 1}.</p>
                      <a href={href}>
                        {name} - {artists[0]?.name}
                      </a>
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
