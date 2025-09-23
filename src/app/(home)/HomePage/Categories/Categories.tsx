'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './categories.module.scss';

gsap.registerPlugin(ScrollTrigger);

export const Categories = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const cards = Array.from(container.children) as HTMLElement[];
      if (cards.length === 0) return;

      gsap.from(cards, {
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        force3D: true,
      });
    }, container);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    card.style.transition = 'transform 0.1s';
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const card = e.currentTarget;
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    card.style.transition = 'transform 0.4s ease';
  };

  const cats = [
    {
      href: '/phones',
      img: '/img/category-phones2.png',
      title: 'Mobile phones',
    },
    { href: '/tablets', img: '/img/category-tablets2.png', title: 'Tablets' },
    {
      href: '/accessories',
      img: '/img/category-accesories2.png',
      title: 'Accessories',
    },
  ];

  return (
    <section className={styles.homeCategories}>
      <h2 className={styles.homeCategoriesTitle}>Shop by category</h2>

      <div className={styles.homeCategoriesContainer} ref={containerRef}>
        {cats.map((cat) => (
          <div
            key={cat.title}
            className={styles.categoryCard}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={cat.href} className={styles.categoryCardLink}>
              <div className={styles.categoryCardContent}>
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  className={styles.categoryImage}
                  onLoadingComplete={() => ScrollTrigger.refresh()}
                />
              </div>
              <h4 className={styles.categoryCardTitle}>{cat.title}</h4>
              <p className={`${styles.categoryCardText} smallText`}>0 models</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
