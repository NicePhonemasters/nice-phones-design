import { Sorts } from '@/types/enums';

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
    case Sorts.newest:
      sorted.sort(
        (a, b) => getVersion(a.namespaceId) - getVersion(b.namespaceId),
      );
      break;

    case Sorts.oldest:
      sorted.sort(
        (a, b) => getVersion(b.namespaceId) - getVersion(a.namespaceId),
      );
      break;

    case Sorts.asc:
      sorted.sort((a, b) => a.price - b.price);
      break;

    case Sorts.desc:
      sorted.sort((a, b) => b.price - a.price);
      break;

    default:
      break;
  }

  return sorted;
};
