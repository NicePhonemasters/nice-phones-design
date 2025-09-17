'use client';
import './slider.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Slider = () => {
  return (
    <article className="home__slider">
      <div className="home__slider-container">
        <button className="home__slider-button home__slider-button--prev">
          {'<'}
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000 }}
          navigation={{
            prevEl: '.home__slider-button--prev',
            nextEl: '.home__slider-button--next',
          }}
          pagination={{
            clickable: true,
            el: '.home__slider-dots',
            bulletClass: 'home__slider-dot',
            bulletActiveClass: 'home__slider-dot--active',
          }}
        >
          <SwiperSlide>
            <Image
              src="/img/banner-phones2.png"
              className="home__slider-banner"
              fill
              alt="banner"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/banner-accessories.png"
              className="home__slider-banner"
              fill
              alt="banner"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/banner-tablets.png"
              className="home__slider-banner"
              fill
              alt="banner"
            />
          </SwiperSlide>
        </Swiper>

        <button className="home__slider-button home__slider-button--next">
          {'>'}
        </button>
      </div>

      <div className="home__slider-dots"></div>
    </article>
  );
};
