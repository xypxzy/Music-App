import { useState } from 'react';
import styles from './App.module.scss';
import { P } from './components/P/P';
import { Tag } from './components/Tag/Tag';

export default function App() {
  return (
    <div>
      <Tag size='m'>lore</Tag>
      <Tag size='s'>lore</Tag>
      <P size='s'>lore</P>
      <P size='m'>lore</P>
      <P size='l'>lore</P>
    </div>
  );
}
