'use client';

import Link from 'next/link';
import styles from './not-found.module.scss';

export default function NotFoundPage() {
  return (
    <main className={styles.notFoundPage}>
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link href="/" className={styles.backHomeBtn}>
        Go back home
      </Link>
    </main>
  );
}
