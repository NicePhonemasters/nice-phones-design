import Image from 'next/image';
import classNames from 'classnames';
import CloseIcon from '../../../assets/icons/close.svg';
import { OneIconButton } from '../Buttons/OneIconButton';
import MinusIcon from '../../../assets/icons/minus.svg';
import PlusIcon from '../../../assets/icons/plus.svg';
import styles from './shopCartItem.module.scss';

type Props = {
  title: string;
  image?: string;
  price: number;
};

export const ShopCartItem = ({ title, image, price }: Props) => {
  return (
    <div className={styles.shopCartItem}>
      <CloseIcon className={styles.shopCartItemIcon} />
      <Image
        src={image}
        alt="Product image"
        width={80}
        height={80}
        className={styles.shopCartItemImage}
      />

      <p className={classNames(styles.shopCartItemTitle, 'body-text')}>
        {title}
      </p>

      <div className={styles.shopCartItem}>
        <OneIconButton icon={MinusIcon} />
        <p className={styles.shopCartItemCount}>1</p>
        <OneIconButton icon={PlusIcon} />
      </div>

      <p className={styles.shopCartItemTotalPrice}>{`$ ${price}`}</p>
    </div>
  );
};
