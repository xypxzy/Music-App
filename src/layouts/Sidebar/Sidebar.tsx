import { IoLibrary } from 'react-icons/io5';
import { MdHomeFilled, MdSearch } from 'react-icons/md';
import { RiHeartFill, RiTimeFill, RiLogoutBoxRLine } from 'react-icons/ri';

import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.scss';

export const Sidebar = ({ ...props }: SidebarProps) => {
  return (
    <div {...props}>
      <ul className={styles.topLinks}>
        <li>
          <MdHomeFilled size='22px' />
          <span>Home</span>
        </li>
        <li>
          <RiTimeFill size='22px' />
          <span>Recents</span>
        </li>
        <li>
          <RiHeartFill size='22px' />
          <span>Favorite</span>
        </li>
        <li>
          <IoLibrary size='22px' />
          <span>Your Library</span>
        </li>
        <li>
          <RiLogoutBoxRLine size='22px' />
          <span>Log out</span>
        </li>
      </ul>
    </div>
  );
};
