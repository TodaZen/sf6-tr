import styles from '@/styles/Sidebar.module.css';

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.active : ''}`}>
      <button className={styles.closeButton} onClick={toggleSidebar}>&times;</button>
      <nav className={styles.nav}>
        <link href="/" className={styles.navButton} onClick={toggleSidebar}>Home</link>
        <link href="/about" className={styles.navButton} onClick={toggleSidebar}>About</link>
        <link href="/services" className={styles.navButton} onClick={toggleSidebar}>Services</link>
        <link href="/contact" className={styles.navButton} onClick={toggleSidebar}>Contact</link>
      </nav>
    </div>
  );
}
