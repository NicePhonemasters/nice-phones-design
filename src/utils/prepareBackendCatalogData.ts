import { Categories } from '@/types/Categories';
import { SortType } from '@/types/SortType';

import productData from '@/app/api/data/products.json';

type Params = {
  sortType: SortType;
  currentPage: number;
  perPage: number;
};

export default function prepareCatalogBackendData(
  category: Categories,
  { sortType, currentPage, perPage }: Params,
) {
  const categoryData = productData.filter(
    (product) => product.category === category,
  );
  const totalItems = categoryData.length;
  const totalPages = Math.ceil(totalItems / perPage);

  let actualPage = currentPage;
  if (currentPage > totalPages || currentPage < 1) {
    actualPage = 1;
  }

  if (sortType !== SortType.None) {
    categoryData.sort((first, second) => {
      switch (sortType) {
        case SortType.YearAsc:
          return first.year - second.year;
        case SortType.YearDesc:
          return second.year - first.year;
        case SortType.PriceAsc:
          return first.price - second.price;
        case SortType.PriceDesc:
          return second.price - first.price;
        default:
          return 0;
      }
    });
  }

  return {
    totalItems,
    data: [
      ...categoryData.slice((actualPage - 1) * perPage, actualPage * perPage),
    ],
  };
}
