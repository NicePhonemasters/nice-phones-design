'use client';

import Image from 'next/image';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Cart.module.scss';
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  selectCartItems,
} from '@/slices/cartSlice';
import { ShopCartItem } from '@components/ui/ShopCartItem/ShopCartItem';
import { AddButton } from '@components/ui/Buttons/AddButton/AddButton';
import { selectTheme } from '@/slices/themeSlice';
import { BackNav } from '@components/ui/BackNav/BackNav';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const themeMode = useSelector(selectTheme);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={styles.cartWrapper}>
      <BackNav />
      <h2 className={styles.title}>Cart</h2>

      <div className={styles.mainContent}>
        <div className={styles.itemsList}>
          {items.length === 0 ? (
            <div className={styles.emptyContainer}>
              <h2
                style={{
                  color: 'var(--color-white)',
                }}
              >
                Cart is empty
              </h2>
              <div className={styles.cartEmptyImage}>
                <Image
                  src={
                    themeMode === 'light'
                      ? '/img/empty-cart-black.svg'
                      : '/img/empty-cart-white.svg'
                  }
                  alt="Cart empty"
                  fill
                />
              </div>
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
    </div>
  );
};

export default Cart;
