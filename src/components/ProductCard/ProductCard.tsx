import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './ProductCard.module.scss';
import { ItemCard } from '@/types/ItemCard';
import FavouriteButton from '@components/ui/Buttons/FavouriteButton/FavouriteButton';
import AddToCartButton from '@components/ui/Buttons/AddToCardButton/AddToCardButton';

export default function ProductCard({ item }: { item: ItemCard }) {
  return (
    <div className={styles.productCardWrapper}>
      <div className={styles.productCard}>
        <Link
          href={`/catalog/${item.category}/${item.itemId}`}
          className={styles.productCardGeneralLink}
        >
          <div className={styles.imageContainer}>
            <Image src={item.image} alt={item.name} fill />
          </div>
          <p className={classNames(styles.title, 'body-text')}>{item.name}</p>

          <div className={styles.priceTag}>
            <p className={styles.priceRegular}>${item.price}</p>
            <p className={styles.priceOld}>${item.fullPrice}</p>
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
          <AddToCartButton item={item} />
          <div className={styles.addToFavourite}>
            <FavouriteButton item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}
