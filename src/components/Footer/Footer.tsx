import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Link href="/">
          <Image
            src="/assets/logo.png"
            className={styles.footerLogo}
            width={80}
            height={26}
            alt="Nice Gadgets"
          />
        </Link>

        <nav className={styles.footerNav}>
          <ul className={styles.footerLists}>
            <li>
              <Link href="github" className={styles.footerNavLink}>
                Github
              </Link>
            </li>
            <li>
              <Link href="contacts" className={styles.footerNavLink}>
                Contacts
              </Link>
            </li>
            <li>
              <Link href="rights" className={styles.footerNavLink}>
                Rights
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.footerRight}>
          <p className={styles.footerRightText}>Back to top</p>
          <button className={styles.footerButtonTop}>↑</button>
        </div>
      </div>
    </footer>
  );
}
