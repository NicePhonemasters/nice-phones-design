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
          autoplay={{ delay: 5000, disableOnInteraction: false }}
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
          slideToClickedSlide={true} // Робить слайди клікабельними
        >
          <SwiperSlide>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/img/banner-mobile.png"
              />
              <Image
                src="/img/banner-phones2.png"
                className="homeSliderBanner"
                fill
                alt="iPhone banner"
              />
            </picture>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/banner-phones.jpg"
              className="homeSliderBanner"
              fill
              alt="Samsung banner"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/img/banner-tablets.png"
              className="homeSliderBanner"
              fill
              alt="iPad banner"
            />
          </SwiperSlide>
        </Swiper>

        <button className="homeSliderButton homeSliderButtonNext">{'>'}</button>
      </div>

      <div className="homeSliderDots"></div>
    </article>
  );
};
