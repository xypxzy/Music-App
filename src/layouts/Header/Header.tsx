import axios from 'axios';
import { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';

import { useStateProvider } from '../../utils/StateProvider';
import { reducerCases } from '../../utils/Constants';
import { HeaderProps, IUserInfo } from './Header.props';

import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';

import styles from './Header.module.scss';

export const Header = ({ ...props }: HeaderProps) => {
  const [{ token, userInfo }, dispatch] = useStateProvider();
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });
      const { id, display_name }: IUserInfo = data;

      const userInfo = {
        userId: id,
        userName: display_name,
      };
      console.log(userInfo);
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo();
  }, [token, dispatch]);

  return (
    <div {...props}>
      <div className={styles.header}>
        <span className={styles.logo}>m.</span>
        <Input />
        <span className={styles.subscription}>
          <Button appearance='primary' fonts='base'>
            plus+
          </Button>
          <div className={styles.avatar}>
            <CgProfile className={styles.avatarIcon} />
            <span>{userInfo?.userName}</span>
          </div>
        </span>
      </div>
    </div>
  );
};
