import React from 'react';
import { notFound } from 'next/navigation';

import { Metadata } from 'next';
import styles from './Catalog.module.scss';
import { PaginationControl } from '@components/ui/Controls/PaginationControl';
import { DropdownSort } from '@components/ui/Dropdowns/DropdownSort';
import { DropdownPages } from '@components/ui/Dropdowns/DropdownPages';
import ProductCard from '@components/ProductCard/ProductCard';
import { Categories, isCategory } from '@/types/Categories';
import { SortType } from '@/types/SortType';
import { getPaginatedItems } from '@/services/fetchClient';
import { getBaseUrl } from '@/utils/getBaseUrl';

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;

  if (!isCategory(category)) {
    notFound();
  }

  const textCategory = getCategoryPretty(category);

  // Build title + description
  const title = `${textCategory}`;
  const description = `Browse wide variety of different gadgets, grouped by their categoires.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://${getBaseUrl()}/catalog/${category}`,
      type: 'website',
      siteName: 'Nice Gadgets',
    },
    alternates: {
      canonical: `/catalog/${category}`,
    },
  };
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

  const sorting = sortBy as SortType;

  const fetchData = await getPaginatedItems(category, {
    sortBy: sorting,
    currentPage,
    perPage,
  });

  const products = fetchData.data;
  const totalItems = fetchData.totalItems;
  const pageCount = Math.ceil(totalItems / +perPage);
  const actualCurrentPage =
    +currentPage > pageCount || +currentPage < 1 || Number.isNaN(currentPage)
      ? 1
      : +currentPage;

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
          return <ProductCard key={product.id} item={product} />;
        })}
      </div>
      <PaginationControl
        pageCount={pageCount}
        currentPage={actualCurrentPage}
      />
    </main>
  );
}

export default Catalog;
