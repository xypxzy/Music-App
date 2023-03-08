import axios from 'axios';
import { useEffect } from 'react';
import { useStateProvider } from '../../utils/StateProvider';
import { reducerCases } from '../../utils/Constants';

export interface IPlaylistItem {
  name: string;
  id: string;
}

export const Playlists = () => {
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
      console.log(response);

      const { items } = response.data;
      const playlists = items.map(({ name, id }: IPlaylistItem) => {
        return { name, id };
      });

      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlayistData();
  }, [token, dispatch]);
  return (
    <div>
      <ul>
        {playlists.map(({ name, id }: IPlaylistItem) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
};
