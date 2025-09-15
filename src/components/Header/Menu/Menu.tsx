/* eslint-disable react/prop-types */
import Link from 'next/link';
import Image from 'next/image';
import './menu.scss';

type NavLinks = {
  title: string;
  path: string;
};

type Props = {
  isOpenedMenu: boolean;
  navLinks: NavLinks[];
};
export const Menu: React.FC<Props> = ({ isOpenedMenu, navLinks }) => {
  return (
    <div className={`burger__menu-overlay ${isOpenedMenu ? 'open' : ''}`}>
      {isOpenedMenu && (
        <div className="burger__menu">
          <nav>
            <ul className="burger__menu-lists">
              {navLinks.map((link) => {
                return (
                  <li key={link.path}>
                    <Link
                      className="burger__menu-link uppercase-text"
                      href={link.path}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="menu__footer">
            <div className="menu__footer-favourites">
              <Link href="h">
                <Image
                  src="/images/heart.svg"
                  width={16}
                  height={16}
                  alt="favourites"
                  className="header__icon"
                />
              </Link>
            </div>

            <div className="menu__footer-cart">
              <Link href="h">
                <Image
                  src="/images/shop-cart.svg"
                  width={16}
                  height={16}
                  alt="cart"
                  className="header__icon"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
