import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.scss';
import { Playlists } from '../../components/Playlist/Playlist';

export const SidebarRight = ({ ...props }: SidebarProps) => {
  return (
    <div {...props}>
      <Playlists />
    </div>
  );
};
