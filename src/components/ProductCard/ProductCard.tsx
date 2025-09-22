import Image from 'next/image';
import React from 'react';
import styles from './ProductCard.module.scss';
import { ItemCard } from '@/types/ItemCard';

export default function ProductCard({ product }: { product: ItemCard }) {
  return (
    <div className={styles.productCardWrapper}>
      <div id={product.id.toString()} className={styles.productCard}>
        <div className={styles.imageContainer}>
          <Image src={product.image} alt={product.name} fill />
        </div>

        <div className={styles.title}>
          <p>{product.name}</p>
        </div>

        <div className={styles.price}>
          <div className={styles.tag}>
            <p>${product.price}</p>
            <p className={styles.old}>${product.fullPrice}</p>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.specs}>
          <div className={styles.item}>
            <span className={styles.label}>Screen</span>
            <span className={styles.value}>{product.screen}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Capacity</span>
            <span className={styles.value}>{product.capacity}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>RAM</span>
            <span className={styles.value}>{product.ram}</span>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.addToCart} type="button">
            Add to cart
          </button>
          <button className={styles.addToFavourite} type="button">
            ♡
          </button>
        </div>
      </div>
    </div>
  );
}
