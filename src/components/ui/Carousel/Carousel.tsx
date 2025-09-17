/* eslint-disable react/prop-types */
'use client';
import './carousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

type Props = {
  title: string;
  items: string[];
};

export const Carousel: React.FC<Props> = ({ title, items }) => {
  return (
    <div className="carousel">
      <div className="carousel__top">
        <h2 className="carousel__top-title">{title}</h2>

        <div className="carousel__top-pag">
          <button className="carousel__pag-button carousel-button--prev">
            {'<'}
          </button>
          <button className="carousel__pag-button carousel-button--next">
            {'>'}
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={4}
        navigation={{
          prevEl: '.carousel-button--prev',
          nextEl: '.carousel-button--next',
        }}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          460: { slidesPerView: 2 },
          540: { slidesPerView: 2.2 },
          640: { slidesPerView: 2.5 },
          820: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
          1200: { slidesPerView: 4 },
        }}
      >
        {items.map((item) => {
          return (
            <SwiperSlide key={item}>
              <div className="card">
                <Image src={item} width="208" height="176" alt="alt" />
                <p style={{ color: '#ed31f1' }}>placeholder</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
