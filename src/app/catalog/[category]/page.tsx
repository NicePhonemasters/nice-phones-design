import React from 'react';
import products from '../../api/data/products.json';
import styles from './Catalog.module.scss';
import { PaginationControl } from '@components/ui/Controls/PaginationControl';
import { DropdownSort } from '@components/ui/Dropdowns/DropdownSort';
import { DropdownPages } from '@components/ui/Dropdowns/DropdownPages';
import ProductCard from '@components/ProductCard/ProductCard';

const Catalog: React.FC = () => {
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

            <DropdownSort />
          </div>

          <div className={styles.catalog__filterGroup}>
            <p className={styles.catalog__filterLabel}>Items on page</p>

            <DropdownPages />
          </div>
        </div>
      </div>

      <div className={styles.catalog__grid}>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <PaginationControl pageCount={5} />
    </main>
  );
};

export default Catalog;
