import React from 'react';
import { notFound } from 'next/navigation';

import styles from './Catalog.module.scss';
import { PaginationControl } from '@components/ui/Controls/PaginationControl';
import { DropdownSort } from '@components/ui/Dropdowns/DropdownSort';
import { DropdownPages } from '@components/ui/Dropdowns/DropdownPages';
import ProductCard from '@components/ProductCard/ProductCard';
import { getPaginatedItems } from '@/services/fetchClient';
import { Categories, isCategory } from '@/types/Categories';
import { isSortType, SortType } from '@/types/SortType';

type Props = {
  params: Promise<{
    category: string;
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

function getCategoryPretty(category: Categories) {
  switch (category) {
    case Categories.Accessories:
      return 'Accessories';
    case Categories.Phones:
      return 'Phones';
    case Categories.Tablets:
      return 'Tablets';
  }
}

async function Catalog({ params, searchParams }: Props) {
  const { category } = await params;
  const awaitedSearchParmas = await searchParams;

  if (!isCategory(category)) {
    notFound();
    return;
  }

  const sortBy = awaitedSearchParmas.sortBy ?? SortType.YearDesc;
  const currentPage = (awaitedSearchParmas.currentPage as string) ?? '1';
  const perPage = (awaitedSearchParmas.perPage as string) ?? '8';

  if (!isSortType(sortBy)) {
    notFound();
    return;
  }

  const sorting = sortBy;

  const fetchData = await getPaginatedItems(category as Categories, {
    sortBy: sorting,
    currentPage,
    perPage,
  });

  const products = fetchData.data;
  const totalItems = fetchData.totalItems;
  const pageCount = Math.ceil(totalItems / +perPage);

  const textCategory = getCategoryPretty(category);

  return (
    <main className={styles.catalog}>
      <div className={styles.catalog__top}>
        <div>
          <h1 className={styles.catalog__title}>{textCategory}</h1>
          <p className={styles.catalog__subtitle}>{`${totalItems} models`}</p>
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
      <PaginationControl pageCount={pageCount} currentPage={+currentPage} />
    </main>
  );
}

export default Catalog;
