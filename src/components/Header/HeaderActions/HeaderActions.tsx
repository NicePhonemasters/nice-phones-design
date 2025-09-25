import classNames from 'classnames';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import FavouriteIcon from '../../../assets/icons/favourite-default.svg';
import ShopCart from '../../../assets/icons/cart-shopping.svg';
import BurgerMenu from '../../../assets/icons/menu-burger.svg';
import Close from '../../../assets/icons/close.svg';
import styles from './headerActions.module.scss';
import { HeaderActionsThemes } from './HeaderActionsThemes';
import { Links } from '@/types/Links';
import { LabelForIcon } from '@components/ui/LabelForIcon/LabelForIcon';
import { selectCartTotalQuantity } from '@/slices/cartSlice';
import { selectFavouriteCount } from '@/slices/favouriteSlice';

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
  const cartCount = useSelector(selectCartTotalQuantity);
  const favouriteCount = useSelector(selectFavouriteCount);

  return (
    <div className={styles.headerActions}>
      <HeaderActionsThemes />

      <Link href={Links.Favourites}>
        <div
          className={classNames(styles.headerActionsFavourites, {
            [styles.linkIconIsActive]: currentPath === Links.Favourites,
          })}
        >
          {favouriteCount !== 0 && <LabelForIcon quantity={favouriteCount} />}

          <FavouriteIcon className={styles.headerIcon} />
        </div>
      </Link>

      <Link href={Links.Cart}>
        <div
          className={classNames(styles.headerActionsCart, {
            [styles.linkIconIsActive]: currentPath === Links.Cart,
          })}
        >
          {cartCount !== 0 && <LabelForIcon quantity={cartCount} />}
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
