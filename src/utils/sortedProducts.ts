import { SortType } from '@/types/SortType';

export const sortedProducts = (products, sortBy) => {
  const sorted = [...products];

  const getVersion = (namespaceId) => {
    return namespaceId
      .split('-')
      .map(Number)
      .filter((item) => !isNaN(item))
      .join('');
  };

  switch (sortBy) {
    case SortType.YearAsc:
      sorted.sort(
        (a, b) => getVersion(a.namespaceId) - getVersion(b.namespaceId),
      );
      break;

    case SortType.YearDesc:
      sorted.sort(
        (a, b) => getVersion(b.namespaceId) - getVersion(a.namespaceId),
      );
      break;

    case SortType.PriceAsc:
      sorted.sort((a, b) => a.price - b.price);
      break;

    case SortType.PriceDesc:
      sorted.sort((a, b) => b.price - a.price);
      break;

    default:
      break;
  }

  return sorted;
};
