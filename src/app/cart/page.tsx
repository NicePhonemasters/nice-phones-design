'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Cart.module.scss';

const Cart: React.FC = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const checkoutBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (cartRef.current) {
      gsap.fromTo(
        cartRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      );
    }

    if (checkoutBtnRef.current) {
      gsap.fromTo(
        checkoutBtnRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: 0.5,
          ease: 'back.out(1.7)',
        },
      );
    }
  }, []);

  return (
    <div ref={cartRef} className={styles.cartWrapper}>
      <h2 className={styles.title}>Cart</h2>

      <div className={styles.mainContent}>
        {/* Грід для карток */}
        <div className={styles.itemsGrid}>
          {/* Тут будуть картки товарів */}
        </div>

        {/* Checkout блок */}
        <div className={styles.checkout}>
          <div className={styles.total}>
            <span className={styles.totalPrice}>SUM</span>
            <span className={styles.totalItems}>Total for N items</span>
          </div>
          <div className={styles.separator}></div>
          <button ref={checkoutBtnRef} className={styles.checkoutBtn}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
