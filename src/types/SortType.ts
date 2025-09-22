export enum SortType {
  None = 'None',
  YearAsc = 'Oldest',
  YearDesc = 'Newest',
  PriceAsc = 'Cheapest first',
  PriceDesc = 'Expensive first',
}

export const isSortType = (value: unknown): value is SortType => {
  return Object.values(SortType).includes(value as SortType);
};
