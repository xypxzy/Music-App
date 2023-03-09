import axios from 'axios';
import { RiArrowRightLine } from 'react-icons/ri';

import { useEffect } from 'react';
import { useStateProvider } from '../../utils/StateProvider';
import { reducerCases } from '../../utils/Constants';
import { PlaylistsProps } from './Playlist.props';

import styles from './Playlist.module.scss';

export interface IPlaylistItem {
  name: string;
  id: string;
  description: string;
  images: IImgURL[];
}

export interface IImgURL {
  url: string;
}

export const Playlists = ({ ...props }: PlaylistsProps) => {
  const [{ token, playlists }, dispatch] = useStateProvider();
  useEffect(() => {
    const getPlayistData = async () => {
      const response = await axios.get(
        'https://api.spotify.com/v1/me/playlists',
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const { items } = response.data;
      const playlists = items.map(
        ({ name, id, description, images }: IPlaylistItem) => {
          return { name, id, description, images };
        }
      );

      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlayistData();
  }, [token, dispatch]);
  return (
    <div {...props}>
      <span className={styles.header}>
        <h1>YOUR PLAYLIST</h1>
        <RiArrowRightLine className={styles.rightArrow} />
      </span>
      <ul className={styles.playlists}>
        {/* Можно еще Аккордеон сделать. Выпадающее плейлист типа этого */}
        {playlists.map(({ name, id, description, images }: IPlaylistItem) => {
          return (
            <li key={id} className={styles.playlistItem}>
              <img src={images[0].url} alt='playlistImg' />
              <h3>{name}</h3>
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
