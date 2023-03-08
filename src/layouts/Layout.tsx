import { ReactNode } from 'react';
//IMPORT COMPONENT LAYOUTS
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import { SidebarRight } from './Sidebar copy/SidebarRight';
//IMPORT CSS
import styles from './Layout.module.scss';
import { Body } from './BodyArea/Body';

export function Layout(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <Body className={styles.body} />
      <SidebarRight className={styles.sidebar2} />
      <Footer className={styles.footer} />
    </div>
  );
}
