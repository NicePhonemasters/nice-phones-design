export enum Categories {
  Phones = 'phones',
  Tablets = 'tablets',
  Accessories = 'accessories',
}

export const isCategory = (value: unknown): value is Categories => {
  return Object.values(Categories).includes(value as Categories);
};
