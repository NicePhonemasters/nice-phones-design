import { products } from './Products';

export type Product = (typeof products)[number];

export interface ProductProp {
  product: Product;
}
