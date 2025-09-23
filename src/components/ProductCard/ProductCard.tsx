'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './ProductCard.module.scss';
import { AddButton } from '@components/ui/Buttons/AddButton/AddButton';
import FavouriteDefaultIcon from '@/assets/icons/favourite-default.svg';
import { ItemCard } from '@/types/ItemCard';

export default function ProductCard({ item }: { item: ItemCard }) {
  return (
    <div className={styles.productCardWrapper}>
      <div className={styles.productCard}>
        <Link href="/" className={styles.productCardGeneralLink}>
          <div className={styles.imageContainer}>
            <Image src={item.image} alt={item.name} fill />
          </div>
          <p className={classNames(styles.title, 'body-text')}>
            {item.name}
          </p>

          <div className={styles.priceTag}>
            <p className={styles.priceRegular}>${item.price}</p>
            <p className={styles.priceOld}>${item.fullPrice}</p>
          </div>

          <div className={styles.title}>
            <p>{item.name}</p>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.specs}>
            <div className={styles.specsItem}>
              <span className={styles.specsLabel}>Screen</span>
              <span className={styles.specsValue}>{item.screen}</span>
            </div>
            <div className={styles.specsItem}>
              <span className={styles.specsLabel}>Capacity</span>
              <span className={styles.specsValue}>{item.capacity}</span>
            </div>
            <div className={styles.specsItem}>
              <span className={styles.specsLabel}>RAM</span>
              <span className={styles.specsValue}>{item.ram}</span>
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
