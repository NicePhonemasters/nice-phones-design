'use client';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';
import { PersistGate } from 'redux-persist/integration/react';
import styles from './Favourites.module.scss';

import { persistor, RootState } from '@/store';
import ProductCard from '@/components/ProductCard/ProductCard';
import { ItemCard } from '@/types/ItemCard';
import { Loader } from '@components/Loader/Loader';

const Favourites: React.FC = () => {
  const items = useSelector((state: RootState) => state.favourites.items);

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 0.8 },
      });

      tl.from(titleRef.current, { y: -50, opacity: 0 })
        .from(subtitleRef.current, { y: -20, opacity: 0 }, '-=0.4')
        .from(gridRef.current, { scale: 0.9, opacity: 0 }, '-=0.3');
    });

    return () => ctx.revert();
  }, []);

  if (items.length === 0) {
    return (
      <div className={styles.favourites__subtitle}>
        <h2>Favourites is empty</h2>
        {/* <button
          onClick={() => router.push('/catalog')}
          className={styles.favourites__btn}
        >
          Back
        </button> */}
      </div>
    );
  }

  return (
    <PersistGate
      persistor={persistor}
      loading={<Loader placeType="fullscreen" />}
    >
      <div className={styles.favourites}>
        <div className={styles.favourites__top}>
          <h1 ref={titleRef} className={styles.favourites__title}>
            Favourites
          </h1>
          <p ref={subtitleRef} className={styles.favourites__subtitle}>
            {items.length} items
          </p>
        </div>

        {/* Грід для карток */}
        <div ref={gridRef} className={styles.favourites__grid}>
          {items.map((item: ItemCard) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </PersistGate>
  );
};

export default Favourites;
