import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

export default function Layout({ 
    children, 
    defaultTitle = 'FurnitureLand',
    title, 
    fullWidth = false 
}) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
        <meta name="description" content="Modern furniture store built with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.layout}>
        <Navbar />
        {fullWidth ? (
          children
        ) : (
          <main className={`${styles.main} ${styles.container}`}>
            {children}
          </main>
        )}
        <Footer />
      </div>
    </>
  );
} 