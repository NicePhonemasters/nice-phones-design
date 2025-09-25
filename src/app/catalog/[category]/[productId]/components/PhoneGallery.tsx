/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client';

import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from '../itemCard-styles/itemCard.module.scss';
import { DetailedItem } from '@/types/DetailedItem';

interface PhoneGalleryProps {
  phone: DetailedItem;
}

export default function PhoneGallery({ phone }: PhoneGalleryProps) {
  const [heroImage, setHeroImage] = useState(
    phone.images?.[0] || 'img/placeholder.png',
  );
  const images = phone.images || [];

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
        {images.map((image, i) => {
          const isSelected = heroImage === image;

          return (
            <li
              key={i}
              className={classNames(styles['item_card__image-list-item'], {
                [styles['item_card__image-list-item--selected']]: isSelected,
              })}
              onClick={() => setHeroImage(image)}
            >
              <Image
                className={styles['item_card__image-small']}
                src={image}
                alt={`item-image-${i + 1}`}
                fill
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
