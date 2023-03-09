import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
{
}

export interface IUserInfo {
  id: string;
  display_name: string;
}
