import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.scss';
import { P } from '../P/P';

export const Button = ({
  appearance = 'primary',
  children,
  fonts,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance == 'primary',
        [styles.white]: appearance == 'white',
        [styles.black]: appearance == 'black',
        [styles.base]: fonts == 'base',
        [styles.baseLogin]: fonts == 'baseLogin',
        [styles.secondary]: fonts == 'secondary',
      })}
      {...props}
    >
      {children}
    </button>
  );
};
