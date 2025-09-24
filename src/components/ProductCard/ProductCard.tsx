import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './ProductCard.module.scss';
import { ItemCard } from '@/types/ItemCard';
import FavouriteButton from '@components/ui/Buttons/FavouriteButton/FavouriteButton';
import AddToCartButton from '@components/ui/Buttons/AddToCardButton/AddToCardButton';
// import FavouriteDefaultIcon from '@/assets/icons/favourite-default.svg';

export default function ProductCard({ product }: { product: ItemCard }) {
  return (
    <div className={styles.productCardWrapper}>
      <div className={styles.productCard}>
        <Link
          href={`/catalog/${product.category}/${product.itemId}`}
          className={styles.productCardGeneralLink}
        >
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
          <AddToCartButton item={product} />
          <div className={styles.addToFavourite}>
            <FavouriteButton item={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
