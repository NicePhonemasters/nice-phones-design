import classNames from 'classnames';
import Link from 'next/link';
import FavouriteIcon from '../../../assets/icons/favourite-default.svg';
import ShopCart from '../../../assets/icons/cart-shopping.svg';
import BurgerMenu from '../../../assets/icons/menu-burger.svg';
import Close from '../../../assets/icons/close.svg';
import styles from './headerActions.module.scss';

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
      <div
        className={classNames(styles.headerActionsFavourites, {
          [styles.linkIconIsActive]: currentPath === '/favorites',
        })}
      >
        <Link href="/favorites">
          <FavouriteIcon className={styles.headerIcon} />
        </Link>
      </div>

      <div
        className={classNames(styles.headerActionsCart, {
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
  );
};
