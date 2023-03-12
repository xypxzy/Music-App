import React from 'react';
import { FooterProps } from './Footer.props';
import { CurrentTracks } from '../../components/CurrentTracks/CurrentTracks';
import { PlayerControls } from '../../components/PlayerControls/PlayerControls';

import styles from './Footer.module.scss';

export const Footer = ({ ...props }: FooterProps) => {
  return (
    <div {...props}>
      <div className={styles.player}>
        <CurrentTracks />
        <PlayerControls />
      </div>
    </div>
  );
};
