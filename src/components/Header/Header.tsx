'use client';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './header.module.scss';
import { Menu } from './Menu/Menu';
import { HeaderActions } from './HeaderActions/HeaderActions';

export const Header = () => {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Phones', path: '/phones' },
    { title: 'Tablets', path: '/tablets' },
    { title: 'Accessories', path: '/accessories' },
  ];

  const [isOpenedMenu, setIsOpenedMenu] = useState(false);
  const currentPath = usePathname();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href="/">
            <Image
              width={80}
              height={26}
              src="/assets/logo.png"
              className={styles.headerLogo}
              alt="Nice Gadgets"
            />
          </Link>

          <nav className={styles.headerNav}>
            <ul className={styles.headerLists}>
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
