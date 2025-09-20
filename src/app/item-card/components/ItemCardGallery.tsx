'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../../item-card/itemCard-styles/itemCard.module.scss';

interface Props {
  images: string[];
}

export default function ItemCardGallery({ images }: Props) {
  const [heroImage, setHeroImage] = useState(images[0]);

  return (
    <>
      <div className={styles['item_card__gallery']}>
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
      </div>

      <ul className={styles['item_card__image-list']}>
        {images.map((image, i) => (
          <li key={i} className={styles['item_card__image-list-item']}>
            <button
              type="button"
              className={`${styles['item_card__image-list-button']} ${
                heroImage === image
                  ? styles['item_card__image-list-button--active']
                  : ''
              }`}
              onClick={() => setHeroImage(image)}
            >
              <Image
                className={styles['item_card__image-small']}
                src={image}
                alt={`item-image-${i + 1}`}
                layout="fill"
              />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
