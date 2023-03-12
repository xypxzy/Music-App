import React, { useEffect } from 'react';
import axios from 'axios';

import { CurrentTracksProps, ICurrentPlaying } from './CurrentTracks.props';
import { useStateProvider } from '../../utils/StateProvider';
import { reducerCases } from '../../utils/Constants';

import styles from './CurrentTracks.module.scss';

export const CurrentTracks = ({ ...props }: CurrentTracksProps) => {
  const [{ token, currentlyPlaying }, dispatch] = useStateProvider();
  useEffect(() => {
    const getCurrentTracks = async () => {
      const response = await axios.get(
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data) {
        const { id, name, artists, album }: ICurrentPlaying =
          response.data.item;
        const currentlyPlaying = {
          id,
          name,
          artists: artists.map((artist) => artist.name),
          image: album.images[2].url,
        };

        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
      }
    };
    getCurrentTracks();
  }, [token, dispatch]);
  return (
    <div {...props}>
      {currentlyPlaying && (
        <div className={styles.track}>
          <div className={styles.trackImage}>
            <img src={currentlyPlaying.image} alt='currentlyPlay' />
          </div>
          <div className={styles.trackInfo}>
            <h3>{currentlyPlaying.name}</h3>
            <h5>{currentlyPlaying.artists.join(', ')}</h5>
          </div>
        </div>
      )}
    </div>
  );
};
