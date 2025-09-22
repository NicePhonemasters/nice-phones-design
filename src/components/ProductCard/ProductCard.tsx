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
            <div className={styles.price__tag}>
              <p>${product.price}</p>
              <p className={styles.price__old}>${product.fullPrice}</p>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.specs}>
            <div className={styles.specs__item}>
              <span className={styles.specs__label}>Screen</span>
              <span className={styles.specs__value}>{product.screen}</span>
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
        </Link>
        <div className={styles.buttonContainer}>
          <AddButton callback={null} />
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
