'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Favourites.module.scss';

const Favourites: React.FC = () => {
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

  return (
    <div className={styles.favourites}>
      <div className={styles.favourites__top}>
        <h1 ref={titleRef} className={styles.favourites__title}>
          Favourites
        </h1>
        <p ref={subtitleRef} className={styles.favourites__subtitle}>
          0 items
        </p>
      </div>

      {/* Грід для карток */}
      <div ref={gridRef} className={styles.favourites__grid}>
        {/* Тут будуть картки товарів */}
      </div>
    </div>
  );
};

export default Favourites;
