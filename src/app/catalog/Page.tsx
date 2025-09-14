'use client';

import React, { useState } from 'react';
import styles from '../../styles/Catalog.module.scss';
import { ButtonPagination } from '@components/ui/Buttons/Pagination';

const Catalog: React.FC = () => {
  const [sortBy, setSortBy] = useState('new');
  const [itemsPerPage, setItemsPerPage] = useState(16);

  const products: object[] = [];

  return (
    <main className={styles.catalog}>
      <div className={styles.catalog__top}>
        <div>
          <h1 className={styles.catalog__title}>CategoryName</h1>
          <p
            className={styles.catalog__subtitle}
          >{`${products.length} models`}</p>
        </div>

        <div className={styles.catalog__filters}>
          <select
            className={styles.catalog__select}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="oldest">Oldest</option>
            <option value="new">Newest</option>
            <option value="priceLow">Sort by price: low</option>
            <option value="priceHigh">Sort by price: high</option>
          </select>

          <select
            className={styles.catalog__select}
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value={8}>8</option>
            <option value={16}>16</option>
            <option value={24}>24</option>
          </select>
        </div>
      </div>

      <div className={styles.catalog__grid}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {/* ProductCard компонент */}
          </div>
        ))}
      </div>
      <ButtonPagination pageCount={5} />
    </main>
  );
};

export default Catalog;
