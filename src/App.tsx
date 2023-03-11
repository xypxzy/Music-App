import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { Login } from './components/Login/Login';
import { useStateProvider } from './utils/StateProvider';
import { reducerCases } from './utils/Constants';
import { Layout } from './layouts/Layout';

export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    // Takes token
    const hash = window.location.hash;
    console.log(hash);

    if (hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1];
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);

  return <div className={styles.app}>{token ? <Layout /> : <Login />}</div>;
}
