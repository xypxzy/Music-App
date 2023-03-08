import React from 'react';
import { BodyProps } from './Body.props';

export const Body = ({ ...props }: BodyProps) => {
  return <div {...props}>Body</div>;
};
