import React from 'react';
import styles from './shopCartItem.module.scss';
import { CartItem } from '@/types/CartItem';

type ShopCartItemProps = {
  item: CartItem;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

const ShopCartItem: React.FC<ShopCartItemProps> = ({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <div className={styles.shopCartItem}>
      <div className={styles.info}>
        <h4>{item.name}</h4>
        <p>Price: ${item.price}</p>
        <div className={styles.quantityControls}>
          <button onClick={onDecrease} disabled={item.quantity === 1}>
            -
          </button>
          <span className={styles.quantityValue}>{item.quantity}</span>
          <button onClick={onIncrease}>+</button>
        </div>
        <p>Total: ${item.price * item.quantity}</p>
      </div>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default ShopCartItem;
