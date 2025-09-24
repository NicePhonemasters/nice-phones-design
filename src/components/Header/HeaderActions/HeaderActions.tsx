import classNames from 'classnames';
import Link from 'next/link';
import FavouriteIcon from '../../../assets/icons/favourite-default.svg';
import ShopCart from '../../../assets/icons/cart-shopping.svg';
import BurgerMenu from '../../../assets/icons/menu-burger.svg';
import Close from '../../../assets/icons/close.svg';
import styles from './headerActions.module.scss';
import { Links } from '@/types/Links';

type Props = {
  currentPath: string;
  isOpenedMenu: boolean;
  setIsOpenedMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HeaderActions = ({
  currentPath,
  isOpenedMenu,
  setIsOpenedMenu,
}: Props) => {
  return (
    <div className={styles.headerActions}>
      <Link href={Links.Favourites}>
        <div
          className={classNames(styles.headerActionsFavourites, {
            [styles.linkIconIsActive]: currentPath === Links.Favourites,
          })}
        >
          <FavouriteIcon className={styles.headerIcon} />
        </div>
      </Link>

      <Link href={Links.Cart}>
        <div
          className={classNames(styles.headerActionsCart, {
            [styles.linkIconIsActive]: currentPath === Links.Cart,
          })}
        >
          <ShopCart className={styles.headerIcon} />
        </div>
      </Link>

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
  );
};
