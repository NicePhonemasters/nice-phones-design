'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import classNames from 'classnames';
import ArrowUp from '../../assets/icons/arrow-up.svg';
import styles from './footer.module.scss';
import { OneIconButton } from '@components/ui/Buttons/OneIconButton';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const navRef = useRef<HTMLUListElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 0.6 },
      });

      tl.from(footerRef.current, { opacity: 0, scale: 0.97 })
        .from(logoRef.current, { y: 30, opacity: 0, rotationX: 15 }, '-=0.3')
        .from(
          navRef.current?.children || [],
          { y: 20, opacity: 0, stagger: 0.15 },
          '-=0.4',
        )
        .from(rightRef.current, { y: 20, opacity: 0, rotationX: 10 }, '-=0.3');

      ScrollTrigger.create({
        trigger: footerRef.current,
        start: 'top bottom-=50',
        animation: tl,
        once: true,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className={styles.footerContent}>
        <Link href="/" ref={logoRef} className={styles.footerLogoLink}>
          <Image
            src="/assets/logo.png"
            width={80}
            height={26}
            alt="Nice Gadgets"
          />
        </Link>

        <nav className={styles.footerNav}>
          <ul className={styles.footerLists} ref={navRef}>
            <li>
              <Link
                href="github"
                className={classNames(styles.footerNavLink, 'uppercase-text')}
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                href="contacts"
                className={classNames(styles.footerNavLink, 'uppercase-text')}
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                href="rights"
                className={classNames(styles.footerNavLink, 'uppercase-text')}
              >
                Rights
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.footerRight}>
          <Link href="#header">
            <OneIconButton icon={ArrowUp} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
