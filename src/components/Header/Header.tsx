'use client';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

import styles from './header.module.scss';
import { Menu } from './Menu/Menu';
import { HeaderActions } from './HeaderActions/HeaderActions';
import { Links } from '@/types/Links';

export const Header = () => {
  const navLinks = [
    { title: 'Home', path: Links.Home },
    { title: 'Phones', path: Links.PhoneCatalog },
    { title: 'Tablets', path: Links.TabletCatalog },
    { title: 'Accessories', path: Links.AccessoriesCatalog },
  ];

  const [isOpenedMenu, setIsOpenedMenu] = useState(false);
  const currentPath = usePathname();

  const logoRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLUListElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 0.8 },
      });

      tl.from(logoRef.current, { x: -50, opacity: 0 })
        .from(
          navRef.current?.children || [],
          { y: -30, opacity: 0, stagger: 0.15 },
          '-=0.4',
        )
        .from(rightRef.current, { y: -40, opacity: 0 }, '-=0.3');
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header className={styles.header} id="header">
        <div className={styles.headerContainer}>
          <div ref={logoRef}>
            <Link href="/">
              <Image
                width={80}
                height={26}
                src="/assets/logo.png"
                className={styles.headerLogo}
                alt="Nice Gadgets"
              />
            </Link>
          </div>

          <nav className={styles.headerNav}>
            <ul className={styles.headerLists} ref={navRef}>
              {navLinks.map((link) => (
                <li key={link.path} className={styles.headerListItem}>
                  <Link
                    href={link.path}
                    className={classNames(
                      styles.headerNavLink,
                      'uppercase-text',
                      {
                        [styles.linkIsActive]: currentPath === link.path,
                      },
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <HeaderActions
            currentPath={currentPath}
            isOpenedMenu={isOpenedMenu}
            setIsOpenedMenu={setIsOpenedMenu}
          />
        </div>
      </header>

      <Menu
        isOpenedMenu={isOpenedMenu}
        navLinks={navLinks}
        currentPath={currentPath}
      />
    </>
  );
};
