'use client';

import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import IconRight from '../../../../assets/icons/arrow-right.svg';
import IconLeft from '../../../../assets/icons/arrow-left.svg';
import styles from './sliderTest.module.scss';
import './sliderDots.scss';

export const SliderTest = () => {
  return (
    <article className="homeSlider">
      <div className="homeSliderContainer">
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
            el: '.sliderDots',
            bulletClass: 'sliderDot',
            bulletActiveClass: 'sliderDotActive',
          }}
          slideToClickedSlide={true}
        >
          <IconLeft
            className={classNames(
              styles.sliderButtonLeft,
              'homeSliderButtonPrev',
            )}
          />
          <SwiperSlide>
            <div className={styles.slideContainerFirst}>
              <Link href="/catalog/phones" className={styles.sliderLink}>
                <h1 className={styles.slideFirstTitle}>
                  Welcome to Nice <br />
                  Gadgets <br />
                  Store
                </h1>

                <Image
                  src="/img/banner-first.png"
                  fill
                  alt="banner first"
                ></Image>
                <p className={styles.slideFirstText}>
                  Model on the photo Iphone 14
                </p>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.slideContainerThird}>
              <Link
                href="/catalog/accessories"
                className={styles.slideContentThird}
              >
                <p className={styles.slideTitleThird}>
                  <span className={styles.line}>Shop all</span>{' '}
                  <span className={styles.line}>watches</span>
                </p>
              </Link>

              <Image
                src="/img/banner-three.png"
                fill
                alt="banner three"
              ></Image>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.slideContainerFourth}>
              <Link href="/catalog/tablets" className={styles.sliderLink}>
                <p className={styles.slideTitleFourth}>
                  Are you fed up with small screens?
                </p>
                <Image
                  src="/img/banner-fourth.png"
                  fill
                  alt="banner fourth"
                  className={styles.slideImageFourth}
                ></Image>
              </Link>
            </div>
          </SwiperSlide>
          <IconRight
            className={classNames(
              styles.sliderButtonRight,
              'homeSliderButtonNext',
            )}
          />
          <div className="sliderDots" />
        </Swiper>
      </div>
    </article>
  );
};

{
  /* <SwiperSlide>
             <div className={styles.slideContainerSecond}>
              <div className={styles.slideSecondContent}>
                <h2 className={styles.slideSecondTitle}>All Iphone 14 line available in our store</h2>
                <p className={styles.slideSecondText}>You are a few tap a way to get it now!</p>
              </div>
                <div className={styles.slideSecondImageContainer}>
                  <Image
                    src='/img/banner-second.png'
                    fill
                    alt='banner second'
                    className={styles.slideSecondImage}
                  >
                  </Image>
                </div>
            </div>
          </SwiperSlide> */
}
