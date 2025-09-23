'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import styles from './ProductCard.module.scss';
import { AddButton } from '@components/ui/Buttons/AddButton/AddButton';
import { ItemCard } from '@/types/ItemCard';
import FavouriteDefaultIcon from '@/assets/icons/favourite-default.svg';

export default function ProductCard({ product }: { product: ItemCard }) {
  return (
    <div className={styles.productCardWrapper}>
      <div className={styles.productCard}>
        <Link href="/" className={styles.productCardLink}>
          <div className={styles.imageContainer}>
            <Image src={product.image} alt={product.name} fill />
          </div>

          <div className={styles.title}>
            <p>{product.name}</p>
          </div>

          <div className={styles.price}>
            <div className={styles.priceTag}>
              <p>${product.price}</p>
              <p className={styles.priceOld}>${product.fullPrice}</p>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.specs}>
            <div className={styles.specsItem}>
              <span className={styles.specsLabel}>Screen</span>
              <span className={styles.specsValue}>{product.screen}</span>
            </div>
            <div className={styles.specsItem}>
              <span className={styles.specsLabel}>Capacity</span>
              <span className={styles.specsValue}>{product.capacity}</span>
            </div>
            <div className={styles.specsItem}>
              <span className={styles.specsLabel}>RAM</span>
              <span className={styles.specsValue}>{product.ram}</span>
            </div>
          </div>
        </Link>
        <div className={styles.buttonContainer}>
          <AddButton />
          <button
            className={styles.buttonContainer__AddTofavoutite}
            type="button"
          >
            <FavouriteDefaultIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
