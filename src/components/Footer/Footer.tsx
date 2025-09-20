'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './footer.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const navRef = useRef<HTMLUListElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 95%',
          toggleActions: 'play none none reverse',
        },
        defaults: { ease: 'power3.out', duration: 0.8 },
      });

      tl.from(footerRef.current, { opacity: 0, scale: 0.95 })

        .from(logoRef.current, { y: 20, opacity: 0 }, '-=0.3')
        .from(
          navRef.current?.children || [],
          { y: 20, opacity: 0, stagger: 0.15 },
          '-=0.2',
        )
        .from(rightRef.current, { y: 20, opacity: 0 }, '-=0.2');
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer__content">
        <Link href="/" ref={logoRef}>
          <Image
            src="/assets/logo.png"
            className={styles.footerLogo}
            width={80}
            height={26}
            alt="Nice Gadgets"
          />
        </Link>

        <nav className="footer__nav">
          <ul ref={navRef} className="footer__lists">
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

        <div ref={rightRef} className="footer__right">
          <p className="footer__right-text small-text">Back to top</p>
          <button className="footer__button-top">q</button>
        </div>
      </div>
    </footer>
  );
}
