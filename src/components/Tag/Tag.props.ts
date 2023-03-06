import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement //Чтобы свойство с обычных button'ов тоже работали, расширяем
  > {
  children: ReactNode;
  size?: 's' | 'm';
  color?: 'gray' | 'primary';
  href?: string;
  active?: 'active';
}
