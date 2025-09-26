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
  sierrablue = '#BFDAF7',
  graphite = '#41424C',
  pink = '#F3B6D5',
  starlight = '#F8F9EC',
  silver = '#B3B6BC',
  midnightgreen = '#28372A',
  coral = '#C7BCA2',
  spaceblack = '#171412',
  skyblue = '#81A9CB',
  rosegold = '#C39CA4',
  blue = '#062A78',
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
