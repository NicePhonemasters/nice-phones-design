'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Cart.module.scss';
import { RootState } from '@/store';
import {
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from '@/slices/cartSlice';
import { ShopCartItem } from '@components/ui/ShopCartItem/ShopCartItem';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  // Рахуємо загальну суму та кількість товарів
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
            <p>Cart is empty</p>
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
            <button
              className={styles.clearBtn}
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
