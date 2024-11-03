import styles from '@/styles/Sidebar.module.css';

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.active : ''}`}>
      <button className={styles.closeButton} onClick={toggleSidebar}>&times;</button>
      <nav className={styles.nav}>
        <a href="/" className={styles.navButton} onClick={toggleSidebar}>Home</a>
        <a href="/about" className={styles.navButton} onClick={toggleSidebar}>About</a>
        <a href="/services" className={styles.navButton} onClick={toggleSidebar}>Services</a>
        <a href="/contact" className={styles.navButton} onClick={toggleSidebar}>Contact</a>
      </nav>
    </div>
  );
}
