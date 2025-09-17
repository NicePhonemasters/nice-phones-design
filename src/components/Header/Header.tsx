'use client';
import Image from 'next/image';
import Link from 'next/link';
import './header.scss';
import '@styles/fonts.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu } from './Menu/Menu';

export const Header = () => {
  const navLinks = [
    { title: 'Home', path: '/', img: null },
    { title: 'Phones', path: '/phones' },
    { title: 'Tablets', path: '/tablets' },
    { title: 'Accessories', path: '/accessories' },
  ];
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);
  const currentPath = usePathname();

  return (
    <>
      <header className="header">
        <Link href="/">
          <Image
            width={80}
            height={26}
            src="/assets/logo.png"
            className="header__logo"
            alt="Nice Gadgets"
          />
        </Link>

        <nav className="header__nav">
          <ul className="header__lists">
            {navLinks.map((link) => {
              return (
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
              );
            })}
          </ul>
        </nav>

        <div className="header__right">
          <div
            className={classNames('header__right-favourites', {
              'link__icon-is-active': currentPath === '/favorites',
            })}
          >
            <Link href="/favorites">
              <Image
                src="/assets/icons/favourite-default.svg"
                width={16}
                height={16}
                alt="favoriter"
                className="header__icon"
              />
            </Link>
          </div>

          <div
            className={classNames('header__right-cart', {
              'link__icon-is-active': currentPath === '/shopcart',
            })}
          >
            <Link href="/shopcart">
              <Image
                src="/assets/icons/cart-shopping.svg"
                width={16}
                height={16}
                alt="cart"
              />
            </Link>
          </div>

          <div className="header__burger-menu">
            {!isOpenedMenu ? (
              <Image
                src="/assets/icons/menu-burger.svg"
                width={16}
                height={16}
                alt="burger-menu"
                onClick={() => setIsOpenedMenu(true)}
              />
            ) : (
              <Image
                src="/assets/icons/close.svg"
                width={16}
                height={16}
                alt="burger-menu"
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
