import { product } from './Products';

export const products = product;

export type Product = (typeof products)[number];

export interface ProductProp {
  product: Product;
}
