'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Cart.module.scss';
import { RootState } from '@/store';
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from '@/slices/cartSlice';
import { ShopCartItem } from '@components/ui/ShopCartItem/ShopCartItem';
import { AddButton } from '@components/ui/Buttons/AddButton/AddButton';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={styles.cartWrapper}>
      <h2 className={styles.title}>Cart</h2>

      <div className={styles.mainContent}>
        <div className={styles.itemsList}>
          {items.length === 0 ? (
            <div className={styles.cartEmptyBlock}>
              <h3 className={styles.cartEmptyTitle}>Your cart is empty</h3>
            </div>
          ) : (
            items.map((item) => (
              <ShopCartItem
                key={item.id}
                item={item}
                onIncrease={() => dispatch(increaseQuantity(item.id))}
                onDecrease={() => dispatch(decreaseQuantity(item.id))}
                onRemove={() => dispatch(removeItem(item.id))}
              />
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className={styles.checkout}>
            <div className={styles.total}>
              <span className={styles.totalPrice}>${totalPrice}</span>
              <span className={styles.totalItems}>
                Total for {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
            </div>
            <div className={styles.separator} />
            <AddButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
