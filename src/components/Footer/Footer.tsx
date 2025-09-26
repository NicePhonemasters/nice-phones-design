'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap';
import { useSelector } from 'react-redux';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import classNames from 'classnames';
import ArrowUp from '../../assets/icons/arrow-up.svg';
import styles from './footer.module.scss';
import { OneIconButton } from '@components/ui/Buttons/OneIconButton';
import { selectTheme } from '@/slices/themeSlice';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const navRef = useRef<HTMLUListElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  const theme = useSelector(selectTheme);

  useLayoutEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(logoRef.current, {
        y: 30,
        opacity: 0,
        rotationX: 15,
        duration: 0.6,
      });
      gsap.from(navRef.current?.children || [], {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        delay: 0.2,
      });
      gsap.from(rightRef.current, {
        y: 20,
        opacity: 0,
        rotationX: 10,
        duration: 0.6,
        delay: 0.4,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className={styles.footerContent}>
        {theme === 'dark' ? (
          <Link href="/" ref={logoRef}>
            <Image
              width={80}
              height={26}
              src="/assets/logo.png"
              className={styles.footerLogoLink}
              alt="Nice Gadgets"
            />
          </Link>
        ) : (
          <Link href="/" ref={logoRef}>
            <Image
              width={80}
              height={26}
              src="/assets/logo-light.png"
              className={styles.headerLogo}
              alt="Nice Gadgets"
            />
          </Link>
        )}
        <nav className={styles.footerNav}>
          <ul className={styles.footerLists} ref={navRef}>
            <li>
              <Link
                href="https://github.com/NicePhonemasters/nice-phones-design"
                target="_blank"
                className={classNames(styles.footerNavLink, 'uppercase-text')}
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className={classNames(styles.footerNavLink, 'uppercase-text')}
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                href="/rights"
                className={classNames(styles.footerNavLink, 'uppercase-text')}
              >
                Rights
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.footerRight} ref={rightRef}>
          <button
            type="button"
            onClick={handleScrollTop}
            className={styles.footerTopBtn}
          >
            <OneIconButton icon={ArrowUp} />
          </button>
        </div>
      </div>
    </footer>
  );
}
