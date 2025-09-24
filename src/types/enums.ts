export enum Colors {
  black = '#000',
  yellow = '#FF0',
  purple = '#800080',
  red = '#EB5757',
  gold = '#FCDBC1',
  green = '#5F7170',
  midnight = '#191970',
  spacegray = '#3B3E4A',
  white = '#F0F0F0',
}

export enum PerPagePagination {
  Eight = '8',
  Sixteen = '16',
  ThirtyTwo = '32',
  FourtyEight = '48',
}

export const isPerPagePagination = (
  value: unknown,
): value is PerPagePagination => {
  return Object.values(PerPagePagination).includes(value as PerPagePagination);
};
