import React from 'react';
import styles from './Favourites.module.scss';

const Favourites: React.FC = () => {
  return (
    <div className={styles.favourites}>
      <div className={styles.favourites__top}>
        <h1 className={styles.favourites__title}>Favourites</h1>
        <p className={styles.favourites__subtitle}>0 items</p>
      </div>

      {/* Грід для карток */}
      <div className={styles.favourites__grid}>
        {/* Тут будуть картки товарів */}
      </div>
    </div>
  );
};

export default Favourites;
