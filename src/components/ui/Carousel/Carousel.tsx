/* eslint-disable react/prop-types */
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { OneIconButton } from '../Buttons/OneIconButton';
import ArrowLeft from '../../../assets/icons/arrow-left.svg';
import ArrowRight from '../../../assets/icons/arrow-right.svg';
import styles from './carousel.module.scss';
import ProductCard from '@components/ProductCard/ProductCard';
import { ItemCard } from '@/types/ItemCard';

type Props = {
  title: string;
  items: ItemCard[];
};

export const Carousel: React.FC<Props> = ({ title, items }) => {
  return (
    <section className={styles.carousel}>
      <div className={styles.carouselTop}>
        <h2 className={styles.carouselTopTitle}>{title}</h2>

        <div className={styles.carouselTopPag}>
          <OneIconButton icon={ArrowLeft} styleName={'carouselButtonPrev'} />

          <OneIconButton icon={ArrowRight} styleName={'carouselButtonNext'} />
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
          prevEl: '.carouselButtonPrev',
          nextEl: '.carouselButtonNext',
        }}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          460: { slidesPerView: 2 },
          540: { slidesPerView: 2.2 },
          640: { slidesPerView: 2.5 },
          820: { slidesPerView: 2.8 },
          1024: { slidesPerView: 3.5 },
          1200: { slidesPerView: 4 },
          1350: { slidesPerView: 4.5 },
          1500: { slidesPerView: 5 },
          1650: { slidesPerView: 5.5 },
          1800: { slidesPerView: 6 },
        }}
      >
        {items.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <ProductCard product={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
