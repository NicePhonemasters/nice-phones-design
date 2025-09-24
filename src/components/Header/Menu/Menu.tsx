/* eslint-disable react/prop-types */
import Link from 'next/link';
import classNames from 'classnames';
import FavouriteIcon from '../../../assets/icons/favourite-default.svg';
import ShopCart from '../../../assets/icons/cart-shopping.svg';
import styles from './menu.module.scss';

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
    <div
      className={classNames(styles.burgerMenuOverlay, {
        [styles.open]: isOpenedMenu,
      })}
    >
      <div className={styles.burgerMenu}>
        <nav>
          <ul className={styles.burgerMenuLists}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  className={classNames(
                    styles.burgerMenuLink,
                    'uppercase-text',
                    {
                      [styles.linkIsActive]: currentPath === link.path,
                    },
                  )}
                  href={link.path}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.menuFooter}>
          <Link href="/favourites">
            <div className={styles.menuFooterFavourites}>
              <FavouriteIcon
                className={classNames(styles.headerIcon, {
                  [styles.linkIconIsActive]: currentPath === '/favourites',
                })}
              />
            </div>
          </Link>

          <Link href="/cart">
            <div className={styles.menuFooterCart}>
              <ShopCart
                className={classNames(styles.headerIcon, {
                  [styles.linkIconIsActive]: currentPath === '/cart',
                })}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
