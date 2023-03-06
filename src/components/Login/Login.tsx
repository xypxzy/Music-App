import { Button } from '../Button/Button';
import styles from './Login.module.scss';

export const Login = () => {
  const handleClick = () => {
    const clientId: string = 'e2708986610346858e7f3e0bf1f26de4';
    const redirectUrl: string = 'http://localhost:5173/';
    const apiUrl: string = 'https://accounts.spotify.com/authorize';
    const scopes: Array<string> = [
      //Spotify Connect Scopes
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-read-currently-playing',
      //Spotify Users Scopes
      'user-read-email',
      'user-read-private',
      //Spotify Listening History Scopes
      'user-read-playback-position',
      'user-top-read',
      'user-read-recently-played',
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
      ' '
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png'
          alt='spotifyIcon'
        />
      </div>
      <div className={styles.connectBtn}>
        <Button appearance='black' fonts='baseLogin' onClick={handleClick}>
          Connect Spotify
        </Button>
      </div>
    </div>
  );
};
