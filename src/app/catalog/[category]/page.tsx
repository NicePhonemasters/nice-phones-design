'use client';

import { Select } from 'radix-ui';
import classNames from 'classnames';
import React from 'react';
import styles from './Catalog.module.scss';
import { PaginationControl } from '@components/ui/Controls/PaginationControl';
import { DropdownSort } from '@components/ui/Dropdowns/DropdownSort';
import { DropdownPages } from '@components/ui/Dropdowns/DropdownPages';

const Catalog: React.FC = () => {
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
        <Select.ItemIndicator className="SelectItemIndicator"></Select.ItemIndicator>
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
    </main>
  );
};

export default Catalog;
