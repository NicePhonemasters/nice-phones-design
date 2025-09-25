'use client';

import Link from 'next/link';
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.notFoundPage}>
      <h1>404</h1>
      <p>
        Oops! The page you are looking for does not exist. It might have been
        removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" className={styles.backHomeBtn}>
        Go Back Home
      </Link>
    </div>
  );
}
