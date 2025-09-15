import React from 'react';
import styles from '../../styles/Cart.module.scss';

const Cart: React.FC = () => {
  return (
    <div className={styles.cartWrapper}>
      <h2 className={styles.title}>Cart</h2>

      {/* Грід для карток */}
      <div className={styles.itemsGrid}>{/* Тут будуть картки товарів */}</div>

      {/* Checkout блок */}
      <div className={styles.checkout}>
        <div className={styles.total}>
          <span className={styles.totalPrice}>SUM</span>
          <span className={styles.totalItems}>Total for N items</span>
        </div>
        <div className={styles.separator}></div>
        <button className={styles.checkoutBtn}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
