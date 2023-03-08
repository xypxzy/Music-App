import { HeaderProps } from './Header.props';
import { Button } from '../../components/Button/Button';
import styles from './Header.module.scss';

export const Header = ({ ...props }: HeaderProps) => {
  return (
    <div {...props}>
      <div className={styles.header}>
        <span className={styles.logo}>m.</span>
        <span className={styles.search}>
          <input type='text' />
        </span>
        <span className={styles.subscription}>
          <Button appearance='primary' fonts='base'>
            plus+
          </Button>
          <p>User</p>
        </span>
      </div>
    </div>
  );
};
