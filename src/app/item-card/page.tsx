// 'use client';

// import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../item-card/itemCard-styles/itemCard.module.scss';
import { Phone } from '../../types/interfaces';
import ItemCardGallery from '../item-card/components/ItemCardGallery';

async function getPhone(phoneId: string): Promise<Phone | null> {
  const res = await fetch('http://localhost:3000/api/phones.json');
  const data: Phone[] = await res.json();
  return data.find((p) => p.id === phoneId) || null;
}

export default async function ItemCard() {
  const phoneId = 'apple-iphone-14-128gb-midnight';
  const phone = await getPhone(phoneId);

  if (!phone) {
    return <p>Phone not found</p>;
  }

  // const heroImage = "/" + (phone.images?.[0] || "img/placeholder.png");
  const images = phone.images?.map((img) => '/' + img) || [];

  return (
    <div className={styles.container_item_card}>
      <section
        className={`${styles['item_card-section']} ${styles['item_card-section-main']}`}
      >
        <h3 className={styles['item_card__title']}>{phone.name}(iMT9G2FS/A)</h3>
        <div className={styles.item_card}>
          <ItemCardGallery images={images} />
          <div className={styles['item_card__info']}>
            <div className={styles['item_card__info-colour-section']}>
              <div className={styles['item_card__info-colour-section__text']}>
                <p className={styles['item_card__info-colour-section__label']}>
                  Available colors
                </p>
                <p className={styles['item_card__info-colour-section__id']}>
                  ID: 802390
                </p>
              </div>
              <div className={styles['item_card__info-colour-section__color']}>
                <ul
                  className={
                    styles['item_card__info-colour-section__color-list']
                  }
                >
                  <li
                    className={
                      styles['item_card__info-colour-section__color-list-item']
                    }
                  >
                    <Image
                      src={'/color-btn-gold.png'}
                      alt="item-card-item"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li
                    className={
                      styles['item_card__info-colour-section__color-list-item']
                    }
                  >
                    <Image
                      src={'/color-btn-green.png'}
                      alt="item-card-item"
                      width={30}
                      height={30}
                      layout="intrinsic"
                    />
                  </li>
                  <li
                    className={
                      styles['item_card__info-colour-section__color-list-item']
                    }
                  >
                    <Image
                      src={'/color-btn-grey.png'}
                      alt="item-card-item"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li
                    className={
                      styles['item_card__info-colour-section__color-list-item']
                    }
                  >
                    <Image
                      src={'/color-btn-white.png'}
                      alt="item-card-item"
                      width={30}
                      height={30}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles['item_card__info-capacity-section']}>
              <p className={styles['item_card__info-capacity-section-text']}>
                Select capacity
              </p>
              <ul className={styles['item_card__info-capacity-section-list']}>
                <li
                  className={
                    styles['item_card__info-capacity-section-list-item']
                  }
                >
                  64 GB
                </li>
                <li
                  className={
                    styles['item_card__info-capacity-section-list-item']
                  }
                >
                  256 GB
                </li>
                <li
                  className={
                    styles['item_card__info-capacity-section-list-item']
                  }
                >
                  512 GB
                </li>
              </ul>
            </div>
            <div className={styles['item_card__info-price']}>
              <p className={styles['item_card__info-price-text']}>$799</p>
              <p className={styles['item_card__info-price-discount']}>$1199</p>
            </div>
            <div className={styles['item_card__info-buy-section']}>
              <button
                type="button"
                className={styles['item_card__info-buy-section-button-buy']}
              >
                {/* Add to cart */}
              </button>
              <button
                type="button"
                className={
                  styles['item_card__info-buy-section-button-favourites']
                }
              >
                <Image
                  src="/like-icon.png"
                  alt="heart icon"
                  width={14}
                  height={12}
                />
              </button>
            </div>
            <div className={styles['item_card__info-description']}>
              <dl className={styles['item_card__info-description-list']}>
                <dt>Screen</dt>
                <dd>6.5” OLED</dd>
                <dt>Resolution</dt>
                <dd>2688x1242</dd>
                <dt>Processor</dt>
                <dd>Apple A12 Bionic</dd>
                <dt>RAM</dt>
                <dd>3 GB</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${styles['item-card-section']} ${styles['item-card-section-description']}`}
      >
        <div className={styles['item-card-description']}>
          <h4 className={styles['item-card-description__title']}>About</h4>
          <h5 className={styles['item-card-description__subtitle']}>
            And then there was Pro
          </h5>
          <p className={styles['item-card-description__text']}>
            A transformative triple-camera system that adds tons of capability
            without complexity. <br />
            An unprecedented leap in battery life. And a mind-blowing chip that
            doubles down on machine learning and pushes the boundaries of what a
            smartphone can do. Welcome to the first iPhone powerful enough to be
            called Pro.
          </p>
          <h5 className={styles['item-card-description__subtitle']}>Camera</h5>
          <p className={styles['item-card-description__text']}>
            Meet the first triple-camera system to combine cutting-edge
            technology with the legendary simplicity of iPhone. Capture up to
            four times more scene. Get beautiful images in drastically lower
            light. Shoot the highest-quality video in a smartphone — then edit
            with the same tools you love for photos. You’ve never shot with
            anything like it.
          </p>
          <h5 className={styles['item-card-description__subtitle']}>
            Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
            Love it.
          </h5>
          <p className={styles['item-card-description__text']}>
            iPhone 11 Pro lets you capture videos that are beautifully true to
            life, with greater detail and smoother motion. Epic processing power
            means it can shoot 4K video with extended dynamic range and
            cinematic video stabilization — all at 60 fps. You get more creative
            control, too, with four times more scene and powerful new editing
            tools to play with.
          </p>
        </div>

        <div className={styles['item-card-description__tech-specs']}>
          <h4 className={styles['item-card-description__tech-spec-title']}>
            Tech specs
          </h4>
          <div className={styles['item-card-description__tech-specs-list']}>
            <div className={styles['item-card-description__tech-specs-row']}>
              <div className={styles['item-card-description__tech-specs-name']}>
                Screen
              </div>
              <div
                className={styles['item-card-description__tech-specs-value']}
              >
                6.5” OLED
              </div>
            </div>

            <div className={styles['item-card-description__tech-specs-row']}>
              <div className={styles['item-card-description__tech-specs-name']}>
                Resolution
              </div>
              <div
                className={styles['item-card-description__tech-specs-value']}
              >
                2688x1242
              </div>
            </div>

            <div className={styles['item-card-description__tech-specs-row']}>
              <div className={styles['item-card-description__tech-specs-name']}>
                Processor
              </div>
              <div
                className={styles['item-card-description__tech-specs-value']}
              >
                Apple A12 Bionic
              </div>
            </div>

            <div className={styles['item-card-description__tech-specs-row']}>
              <div className={styles['item-card-description__tech-specs-name']}>
                RAM
              </div>
              <div
                className={styles['item-card-description__tech-specs-value']}
              >
                3 GB
              </div>
            </div>

            <div className={styles['item-card-description__tech-specs-row']}>
              <div className={styles['item-card-description__tech-specs-name']}>
                Built in memory
              </div>
              <div
                className={styles['item-card-description__tech-specs-value']}
              >
                64 GB
              </div>
            </div>

            <div className={styles['item-card-description__tech-specs-row']}>
              <div className={styles['item-card-description__tech-specs-name']}>
                Camera
              </div>
              <div
                className={styles['item-card-description__tech-specs-value']}
              >
                12 Mp + 12 Mp + 12 Mp (Triple)
              </div>
            </div>

            <div className={styles['item-card-description__tech-specs-row']}>
              <div className={styles['item-card-description__tech-specs-name']}>
                Zoom
              </div>
              <div
                className={styles['item-card-description__tech-specs-value']}
              >
                Optical, 2x
              </div>
            </div>

            <div className={styles['item-card-description__tech-specs-row']}>
              <div className={styles['item-card-description__tech-specs-name']}>
                Cell
              </div>
              <div
                className={styles['item-card-description__tech-specs-value']}
              >
                GSM, LTE, UMTS
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${styles['item-card-section']} ${styles['item-card-favourites']}`}
      >
        <div className={styles['item-card-favourites__title-and-buttons']}>
          <h3 className={styles['item-card-favourites__title']}>
            You may also like
          </h3>
          <div className={styles['item-card-favourites__buttons']}>
            <button
              className={styles['item-card-favourites__buttons-prev']}
            ></button>
            <button
              className={styles['item-card-favourites__buttons-next']}
            ></button>
          </div>
        </div>
        <div className={styles['item-card-favourites__slider']}>
          <div
            className="placeholder"
            style={{
              backgroundColor: 'var(--color-placeholder)',
              width: '100%',
              height: '30vh',
            }}
          ></div>
        </div>
      </section>
    </div>
  );
}
