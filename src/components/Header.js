import { useState } from 'react';
import Sidebar from './Sidebar';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <h1 className={styles.logo}>My Website</h1>
          {/* ハンバーガーメニューアイコン */}
          <div
            className={`${styles.hamburger} ${isSidebarOpen ? styles.open : ''}`}
            onClick={toggleSidebar}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </div>
      </header>

      {/* ナビゲーションボタン */}
      <nav className={styles.navButtons}>
        <link href="/" className={styles.navButton}>Home</link>
        <link href="/about" className={styles.navButton}>About</link>
        <link href="/services" className={styles.navButton}>Services</link>
        <link href="/contact" className={styles.navButton}>Contact</link>
      </nav>

      {/* サイドバー（モバイル用） */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {isSidebarOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}
      
    </>
  );
}
