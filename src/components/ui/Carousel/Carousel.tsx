'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { CarouselPags } from './CarouselPags';
import styles from './carousel.module.scss';
import ProductCard from '@components/ProductCard/ProductCard';
import { CarouselTypes } from '@/types/CarouselTypes';
import { ItemCard } from '@/types/ItemCard';
import 'swiper/css';
import 'swiper/css/navigation';

type Props = {
  title: string;
  type: CarouselTypes;
};

export const Carousel = ({ title, type }: Props) => {
  const [items, setItems] = useState<ItemCard[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/carousel/${type}`);
        if (!res.ok) throw new Error('Failed to fetch carousel items');
        const data: ItemCard[] = await res.json();
        setItems(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [type]);

  return (
    <section className={styles.carousel}>
      <div className={styles.carouselTop}>
        <h2 className={styles.carouselTopTitle}>{title}</h2>
        <CarouselPags />
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
          prevEl: '.carouselButtonPrev',
          nextEl: '.carouselButtonNext',
        }}
      >
        {items.length > 0 ? (
          items.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard item={item} />
            </SwiperSlide>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Swiper>
    </section>
  );
};
