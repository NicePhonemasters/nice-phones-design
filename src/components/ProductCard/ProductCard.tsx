import Image from 'next/image';
import React from 'react';
import styles from '../../styles/ProductCard.module.scss';
import { products } from './Products';
import { ProductCardProps } from '.';

export default function ProductCard({ id }: ProductCardProps) {
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className={styles.placeholder}>Product not found</div>;
  }

  return (
    <div className={styles.productCardWrapper}>
      <div id={product.id} className={styles.productCard}>
        <div className={styles.imageContainer}>
          <Image src={product.imageSrc} alt={product.title} fill />
        </div>

        <div className={styles.title}>
          <p>{product.title}</p>
        </div>

        <div className={styles.price}>
          <div className={styles.price__tag}>
            <p>${product.price}</p>
            <p className={styles.price__old}>${product.oldPrice}</p>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.specs}>
          <div className={styles.specs__item}>
            <span className={styles.specs__label}>Screen</span>
            <span className={styles.specs__value}>{product.display}</span>
          </div>
          <div className={styles.specs__item}>
            <span className={styles.specs__label}>Capacity</span>
            <span className={styles.specs__value}>{product.capacity}</span>
          </div>
          <div className={styles.specs__item}>
            <span className={styles.specs__label}>RAM</span>
            <span className={styles.specs__value}>{product.ram}</span>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.buttonContainer__AddToCart} type="button">
            Add to cart
          </button>
          <button
            className={styles.buttonContainer__AddTofavoutite}
            type="button"
          >
            ♡
          </button>
        </div>
      </div>
    </div>
  );
}
