import Image from 'next/image';
import classNames from 'classnames';
import React from 'react';
import CloseIcon from '../../../assets/icons/close.svg';
import { OneIconButton } from '../Buttons/OneIconButton';
import MinusIcon from '../../../assets/icons/minus.svg';
import PlusIcon from '../../../assets/icons/plus.svg';
import styles from './shopCartItem.module.scss';
import { CartItem } from '@/types/CartItem';

type Props = {
  item: CartItem;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
};

export const ShopCartItem = ({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: Props) => {
  return (
    <div className={styles.shopCartItem}>
      <div className={styles.shopCartItemWrapperIcon}>
        <CloseIcon className={styles.shopCartItemIcon} onClick={onRemove} />
      </div>
      <Image
        src={item.image}
        alt="Product image"
        width={80}
        height={80}
        className={styles.shopCartItemImage}
      />

      <p className={classNames(styles.shopCartItemTitle, 'body-text')}>
        {item.name}
      </p>

      <div className={styles.shopCartItemCounter}>

        <OneIconButton
          icon={MinusIcon}
          handleClick={onDecrease}
          disabled={item.quantity === 1 && true}
        />

        <p className={styles.shopCartItemCount}>{item.quantity}</p>
        <OneIconButton icon={PlusIcon} handleClick={onIncrease} />
      </div>

      <div>
        <p className={styles.shopCartItemTotalPrice}>{`$ ${item.price}`}</p>
      </div>
    </div>
  );
};
