'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './ProductCard.module.scss';
import { AddButton } from '@components/ui/Buttons/AddButton/AddButton';
import { ItemCard } from '@/types/ItemCard';
import FavouriteDefaultIcon from '@/assets/icons/favourite-default.svg';

export default function ProductCard({ product }: { product: ItemCard }) {
  return (
    <div className={styles.productCardWrapper}>
      <div className={styles.productCard}>
        <Link href="/" className={styles.productCardGeneralLink}>
          <div className={styles.imageContainer}>
            <Image src={product.image} alt={product.name} fill />
          </div>
          <p className={classNames(styles.title, 'body-text')}>
            {product.name}
          </p>

          <div className={styles.priceTag}>
            <p className={styles.priceRegular}>${product.price}</p>
            <p className={styles.priceOld}>${product.fullPrice}</p>
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
          <button className={styles.addToFavourite} type="button">
            <FavouriteDefaultIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
