'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './categories.module.scss';

gsap.registerPlugin(ScrollTrigger);

export const Categories = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.children;
    gsap.from(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
    });
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

  return (
    <section className={styles.homeCategories}>
      <h2 className={styles.homeCategoriesTitle}>Shop by category</h2>

      <div className={styles.homeCategoriesContainer} ref={containerRef}>
        {[
          {
            href: '/phones',
            img: '/img/category-phones2.png',
            title: 'Mobile phones',
          },
          {
            href: '/tablets',
            img: '/img/category-tablets2.png',
            title: 'Tablets',
          },
          {
            href: '/accessories',
            img: '/img/category-accesories2.png',
            title: 'Accessories',
          },
        ].map((cat) => (
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
