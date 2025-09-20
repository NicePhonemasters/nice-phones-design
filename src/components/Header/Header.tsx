'use client';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

import styles from './header.module.scss';
import { Menu } from './Menu/Menu';

import FavouriteIcon from '@/assets/icons/favourite-default.svg';
import ShopCart from '@/assets/icons/cart-shopping.svg';
import BurgerMenu from '@/assets/icons/menu-burger.svg';
import Close from '@/assets/icons/close.svg';

export const Header = () => {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Phones', path: '/phones' },
    { title: 'Tablets', path: '/tablets' },
    { title: 'Accessories', path: '/accessories' },
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
      <header className={styles.header}>
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
                <li key={link.path}>
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

          <div className={styles.headerRight} ref={rightRef}>
            <div
              className={classNames(styles.headerRightFavourites, {
                [styles.linkIconIsActive]: currentPath === '/favorites',
              })}
            >
              <Link href="/favorites">
                <FavouriteIcon className={styles.headerIcon} />
              </Link>
            </div>

            <div
              className={classNames(styles.headerRightCart, {
                [styles.linkIconIsActive]: currentPath === '/shopcart',
              })}
            >
              <Link href="/shopcart">
                <ShopCart className={styles.headerIcon} />
              </Link>
            </div>

            <div className={styles.headerBurgerMenu}>
              {!isOpenedMenu ? (
                <BurgerMenu
                  className={styles.headerIcon}
                  onClick={() => setIsOpenedMenu(true)}
                />
              ) : (
                <Close
                  className={styles.headerIcon}
                  onClick={() => setIsOpenedMenu(false)}
                />
              )}
            </div>
          </div>
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
