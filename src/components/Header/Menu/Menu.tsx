/* eslint-disable react/prop-types */
import Link from 'next/link';
import Image from 'next/image';
import './menu.scss';
import classNames from 'classnames';

type NavLinks = {
  title: string;
  path: string;
};

type Props = {
  isOpenedMenu: boolean;
  navLinks: NavLinks[];
  currentPath: string;
};
export const Menu: React.FC<Props> = ({
  isOpenedMenu,
  navLinks,
  currentPath,
}) => {
  return (
    <div className={`burger__menu-overlay ${isOpenedMenu ? 'open' : ''}`}>
      <div className="burger__menu">
        <nav>
          <ul className="burger__menu-lists">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  className={classNames('burger__menu-link uppercase-text', {
                    'menu__link-is-active': currentPath === link.path,
                  })}
                  href={link.path}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="menu__footer">
          <div className="menu__footer-favourites">
            <Link href="/favourites">
              <Image
                src="/assets/icons/favourite-default.svg"
                width={16}
                height={16}
                alt="favourites"
                className={classNames('header__icon', {
                  'link__icon-is-active': currentPath === '/favourites',
                })}
              />
            </Link>
          </div>

          <div className="menu__footer-cart">
            <Link href="/shopcart">
              <Image
                src="/assets/icons/cart-shopping.svg"
                width={16}
                height={16}
                alt="cart"
                className={classNames('header__icon', {
                  'link__icon-is-active': currentPath === '/shopcart',
                })}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
