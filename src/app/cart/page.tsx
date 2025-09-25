'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import styles from './Cart.module.scss';
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  selectCartItems,
} from '@/slices/cartSlice';
import { ShopCartItem } from '@components/ui/ShopCartItem/ShopCartItem';
import { AddButton } from '@components/ui/Buttons/AddButton/AddButton';
import { BackNav } from '@components/ui/BackNav/BackNav';
import { persistor } from '@/store';
import { Loader } from '@components/Loader/Loader';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={styles.cartWrapper}>
      <BackNav />
      <PersistGate
        persistor={persistor}
        loading={<Loader placeType="fullscreen" />}
      >
        <h2 className={styles.title}>Cart</h2>

        <div className={styles.mainContent}>
          <div className={styles.itemsList}>
            {items.length === 0 ? (
              <h2
                style={{
                  color: 'var(--color-white)',
                }}
              >
                Cart is empty
              </h2>
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

          {/* Нужно сделать нормальный вид для пустой корзины */}

          {items.length > 0 && (
            <div className={styles.checkout}>
              <div className={styles.total}>
                <span className={styles.totalPrice}>${totalPrice}</span>
                <span className={styles.totalItems}>
                  Total for {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </span>
              </div>
              <div className={styles.separator} />
              <AddButton>Checkout</AddButton>
            </div>
          )}
        </div>
      </PersistGate>
    </div>
  );
};

export default Cart;
