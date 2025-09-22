// 'use client';

// import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../item-card/itemCard-styles/itemCard.module.scss';
import { Phone } from '../../types/interfaces';

async function getPhone(phoneId: string): Promise<Phone | null> {
  const res = await fetch('http://localhost:3000/api/phones.json');
  const data: Phone[] = await res.json();
  return data.find((p) => p.id === phoneId) || null;
}

export default async function ItemCard() {
  const phoneId = 'apple-iphone-12-128gb-black';
  const phone = await getPhone(phoneId);

  if (!phone) {
    return <p>Phone not found</p>;
  }

  const heroImage = '/' + (phone.images?.[0] || 'img/placeholder.png');
  const images = phone.images?.map((img) => '/' + img) || [];

  return (
    <div className={styles.container_item_card}>
      <section
        className={`${styles['item_card-section']} ${styles['item_card-section-main']}`}
      >
        <h3 className={styles['item_card__title']}>{phone.name}(iMT9G2FS/A)</h3>
        <div className={styles.item_card}>
          <div className={styles['item_card__image-wrap']}>
            <div className={styles['item_card__image']}>
              <Image
                className={styles['item_card__image-hero']}
                src={heroImage}
                alt="main-image"
                fill
              />
            </div>
          </div>
          <ul className={styles['item_card__image-list']}>
            {images.map((image, i) => (
              <li className={styles['item_card__image-list-item']} key={i}>
                <Image
                  className={styles['item_card__image-small']}
                  src={image}
                  alt={`item-image-${i + 1}`}
                  fill
                />
              </li>
            ))}
          </ul>
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
                  {phone.colorsAvailable.map((color) => (
                    <li
                      key={color}
                      className={
                        styles[
                          'item_card__info-colour-section__color-list-item'
                        ]
                      }
                    >
                      <Image
                        src={`/color-btn-${color}.png`}
                        alt="item-card-item"
                        width={30}
                        height={30}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles['item_card__info-capacity-section']}>
              <p className={styles['item_card__info-capacity-section-text']}>
                Select capacity
              </p>
              <ul className={styles['item_card__info-capacity-section-list']}>
                {phone.capacityAvailable.map((cap) => (
                  <li
                    key={cap}
                    className={
                      styles['item_card__info-capacity-section-list-item']
                    }
                  >
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles['item_card__info-price']}>
              <p className={styles['item_card__info-price-discount']}>
                ${phone.priceDiscount}
              </p>
              <p className={styles['item_card__info-price-regular']}>
                ${phone.priceRegular}
              </p>
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
                <dd>{phone.screen}</dd>
                <dt>Resolution</dt>
                <dd>{phone.resolution}</dd>
                <dt>Processor</dt>
                <dd>{phone.processor}</dd>
                <dt>RAM</dt>
                <dd>{phone.ram}</dd>
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

          {phone.description?.map((section, i) => (
            <div key={i}>
              <h5 className={styles['item-card-description__subtitle']}>
                {section.title}
              </h5>
              {section.text.map((line, j) => (
                <p key={j} className={styles['item-card-description__text']}>
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className={styles['item-card-description__tech-specs']}>
          <h4 className={styles['item-card-description__tech-spec-title']}>
            Tech specs
          </h4>
          <div className={styles['item-card-description__tech-specs-list']}>
            {[
              { name: 'Screen', value: phone.screen },
              { name: 'Resolution', value: phone.resolution },
              { name: 'Processor', value: phone.processor },
              { name: 'RAM', value: phone.ram },
              { name: 'Built in memory', value: phone.capacity },
              { name: 'Camera', value: phone.camera },
              { name: 'Zoom', value: phone.zoom },
              { name: 'Cell', value: phone.cell?.join(', ') },
            ]
              .filter((spec) => spec.value)
              .map((spec) => (
                <div
                  key={spec.name}
                  className={styles['item-card-description__tech-specs-row']}
                >
                  <div
                    className={styles['item-card-description__tech-specs-name']}
                  >
                    {spec.name}
                  </div>
                  <div
                    className={
                      styles['item-card-description__tech-specs-value']
                    }
                  >
                    {spec.value}
                  </div>
                </div>
              ))}
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
