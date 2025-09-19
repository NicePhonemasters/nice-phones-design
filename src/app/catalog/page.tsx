'use client';

import { Select } from 'radix-ui';
import classNames from 'classnames';
import { CheckIcon } from '@radix-ui/react-icons';
import React from 'react';
import styles from './Catalog.module.scss';
import { PaginationControl } from '@components/ui/Controls/PaginationControl';
import { DropdownSort } from '@components/ui/Dropdowns/DropdownSort';
import { DropdownPages } from '@components/ui/Dropdowns/DropdownPages';
import { SelectColor } from '@components/ui/SelectColor/SelectColor';

const Catalog: React.FC = () => {
  // const [sortBy, setSortBy] = useState('new');
  // const [itemsPerPage, setItemsPerPage] = useState(16);

  const SelectItem = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Select.Item>
  >(({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classNames('SelectItem', className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  });

  SelectItem.displayName = 'SelectItem';
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

            <DropdownSort SelectItem={SelectItem} />
          </div>

          <div className={styles.catalog__filterGroup}>
            <p className={styles.catalog__filterLabel}>Items on page</p>

            <DropdownPages SelectItem={SelectItem} />
          </div>
        </div>
      </div>

      <div className={styles.catalog__grid}></div>
      <PaginationControl pageCount={5} />
      <SelectColor color={'#5F7170'} productId={2} />
    </main>
  );
};

export default Catalog;

{
  /* <select
              className={`${styles.catalog__select} ${styles.catalog__selectSort}`}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="priceLow">Price: low to high</option>
              <option value="priceHigh">Price: high to low</option>
            </select> */
}

{
  /* <select
              className={`${styles.catalog__select} ${styles.catalog__selectItems}`}
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value={8}>8</option>
              <option value={16}>16</option>
              <option value={24}>24</option>
            </select> */
}
