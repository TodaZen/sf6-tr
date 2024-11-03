import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Header from '../components/Header';



export default function HomePage() {
  return (
    <>
     
     <div>
      <Header />
      <main style={{ paddingTop: '4rem' }}>
        <h1>Welcome to My Website</h1>
        <p></p>
      </main>
    </div>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>紹介</h2>
          <p>こちらはNext.jsを使用して作成したシンプルなWebページのサンプルです。</p>
        </section>
        <section className={styles.section}>
          <h2>サービス</h2>
          <p>シンプルでモダンなUIを目指したデザインです。</p>
          <a></a>
        </section>git branch
      </main>
      <footer className={styles.footer}>
        <p>© 2023 シンプルなデザイン. All Rights Reserved.</p>
      </footer>
    </>
  );
}
