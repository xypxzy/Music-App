import React from 'react';
import styles from './Tag.module.scss';
import cn from 'classnames';
import { TagProps } from './Tag.props';

export const Tag = ({
  size = 'm',
  children,
  color = 'gray',
  href,
  className,
  ...props
}: TagProps) => {
  return (
    <p
      className={cn(styles.tag, className, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.gray]: color == 'gray',
        [styles.primary]: color == 'primary',
      })}
      {...props}
    >
      {' '}
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </p>
  );
};
