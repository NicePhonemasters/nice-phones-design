'use client';

import Image from 'next/image';
import styles from '../itemCard-styles/itemCard.module.scss';
import { DetailedItem } from '@/types/DetailedItem';

interface PhoneGalleryProps {
  phone: DetailedItem;
}

export default function PhoneGallery({ phone }: PhoneGalleryProps) {
  const heroImage = phone.images?.[0] || 'img/placeholder.png';
  const images = phone.images?.map((img) => img) || [];

  return (
    <>
      <div className={styles['item_card__image-wrap']}>
        <div className={styles['item_card__image']}>
          <Image
            className={styles['item_card__image-hero']}
            src={heroImage}
            alt="main-image"
            fill
          />
        </div>
      </div>
      <ul className={styles['item_card__image-list']}>
        {images.map((image, i) => (
          <li className={styles['item_card__image-list-item']} key={i}>
            <Image
              className={styles['item_card__image-small']}
              src={image}
              alt={`item-image-${i + 1}`}
              fill
            />
          </li>
        ))}
      </ul>
    </>
  );
}
