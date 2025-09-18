'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './slider.module.scss';

export const Slider = () => {
  return (
    <article className={styles.homeSlider}>
      <div className={styles.homeSliderContainer}>
        <button
          className={
            styles.homeSliderButton + ' ' + styles.homeSliderButtonPrev
          }
        >
          {'<'}
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000 }}
          navigation={{
            prevEl: '.' + styles.homeSliderButtonPrev,
            nextEl: '.' + styles.homeSliderButtonNext,
          }}
          pagination={{
            clickable: true,
            el: '.' + styles.homeSliderDots,
            bulletClass: styles.homeSliderDot,
            bulletActiveClass: styles.homeSliderDot + '--active',
          }}
        >
          <SwiperSlide>
            <Image
              src="/img/banner-phones2.png"
              className={styles.homeSliderBanner}
              fill
              alt="banner"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/banner-phones.png"
              className={styles.homeSliderBanner}
              fill
              alt="banner"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/banner-image2.jpg"
              className={styles.homeSliderBanner}
              fill
              alt="banner"
            />
          </SwiperSlide>
        </Swiper>

        <button
          className={
            styles.homeSliderButton + ' ' + styles.homeSliderButtonNext
          }
        >
          {'>'}
        </button>
      </div>

      <div className={styles.homeSliderDots}></div>
    </article>
  );
};
