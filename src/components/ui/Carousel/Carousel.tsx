 
'use client';

import { useEffect, useState } from 'react';
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
import { Phone } from '@/types/types';
import { CarouselTypes } from '@/types/CarouselTypes';

type Props = {
  title: string;
  type: CarouselTypes;
};

export const Carousel: React.FC<Props> = ({ title, type }: Props) => {
  const [items, setItems] = useState<Phone[]>([]);
  //TODO: нужен-ли здесь лоудер? //
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);
    fetch(`/api/carousel/${type}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        // setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        // setLoading(false);
      });
  }, [type]);

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
        {Array.isArray(items) && items.length > 0 ? (
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
