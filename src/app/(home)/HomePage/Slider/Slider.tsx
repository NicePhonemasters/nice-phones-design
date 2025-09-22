'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.scss';

export const Slider = () => {
  return (
    <article className="homeSlider">
      <div className="homeSliderContainer">
        <button className="homeSliderButton homeSliderButtonPrev">{'<'}</button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000 }}
          navigation={{
            prevEl: '.homeSliderButtonPrev',
            nextEl: '.homeSliderButtonNext',
          }}
          pagination={{
            clickable: true,
            el: '.homeSliderDots',
            bulletClass: 'homeSliderDot',
            bulletActiveClass: 'homeSliderDot--active',
          }}
        >
          <SwiperSlide>
            <Image
              src="/img/banner-phones2.png"
              className="homeSliderBanner"
              fill
              alt="banner"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/banner-phones.png"
              className="homeSliderBanner"
              fill
              alt="banner"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/banner-tablets.png"
              className="homeSliderBanner"
              fill
              alt="banner"
            />
          </SwiperSlide>
        </Swiper>

        <button className="homeSliderButton homeSliderButtonNext">{'>'}</button>
      </div>

      <div className="homeSliderDots"></div>
    </article>
  );
};
