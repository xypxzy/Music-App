import React from 'react';

import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from 'react-icons/bs';
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg';
import { FiRepeat } from 'react-icons/fi';
import { useStateProvider } from '../../utils/StateProvider';

import styles from './PlayerControls.module.scss';
import axios from 'axios';
import { reducerCases } from '../../utils/Constants';
import { ICurrentPlaying } from '../CurrentTracks/CurrentTracks.props';

export const PlayerControls = () => {
  const [{ token, playerState }, dispatch] = useStateProvider();
  const changeTrack = async (type: string) => {
    await axios.post(
      `https://api.spotify.com/v1/me/player/${type}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
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
      const { id, name, artists, album }: ICurrentPlaying = response.data.item;
      const currentlyPlaying = {
        id,
        name,
        artists: artists.map((artist) => artist.name),
        image: album.images[2].url,
      };

      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
    } else {
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null });
    }
  };

  return (
    <div className={styles.playerState}>
      <div className={styles.shuffle}>
        <BsShuffle />
      </div>
      <div className={styles.previous} onClick={() => changeTrack('previous')}>
        <CgPlayTrackPrev />
      </div>
      <div className={styles.state}>
        {playerState ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
      </div>
      <div className={styles.next} onClick={() => changeTrack('next')}>
        <CgPlayTrackNext />
      </div>
      <div className={styles.repeat}>
        <FiRepeat />
      </div>
    </div>
  );
};
