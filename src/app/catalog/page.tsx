'use client';

import React, { useState } from 'react';
import styles from './Catalog.module.scss';
import { ButtonPagination } from '@components/ui/Buttons/Pagination';

const Catalog: React.FC = () => {
  const [sortBy, setSortBy] = useState('new');
  const [itemsPerPage, setItemsPerPage] = useState(16);

  return (
    <main className={styles.catalog}>
      <div className={styles.catalog__top}>
        <div>
          <h1 className={styles.catalog__title}>CategoryName</h1>
          <p className={styles.catalog__subtitle}>0 models</p>
        </div>

        <div className={styles.catalog__filters}>
          <div className={styles.catalog__filterGroup}>
            <p className={styles.catalog__filterLabel}>Sort by</p>
            <select
              className={`${styles.catalog__select} ${styles.catalog__selectSort}`}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="priceLow">Price: low to high</option>
              <option value="priceHigh">Price: high to low</option>
            </select>
          </div>

          <div className={styles.catalog__filterGroup}>
            <p className={styles.catalog__filterLabel}>Items on page</p>
            <select
              className={`${styles.catalog__select} ${styles.catalog__selectItems}`}
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value={8}>8</option>
              <option value={16}>16</option>
              <option value={24}>24</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.catalog__grid}></div>
      <ButtonPagination pageCount={5} />
    </main>
  );
};

export default Catalog;
