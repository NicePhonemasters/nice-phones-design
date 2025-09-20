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
      <header className="header">
        <div ref={logoRef}>
          <Link href="/">
            <Image
              width={80}
              height={26}
              src="/assets/logo.png"
              className="header__logo"
              alt="Nice Gadgets"
            />
          </Link>
        </div>

        <nav className="header__nav">
          <ul ref={navRef} className="header__lists">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  className={classNames('header__nav-link uppercase-text', {
                    'link-is-active': currentPath === link.path,
                  })}
                  href={link.path}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div ref={rightRef} className="header__right">
          <div
            className={classNames('header__right-favourites', {
              'link__icon-is-active': currentPath === '/favorites',
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
      </header>

      <Menu
        isOpenedMenu={isOpenedMenu}
        navLinks={navLinks}
        currentPath={currentPath}
      />
    </>
  );
};
