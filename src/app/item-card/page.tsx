import Image from 'next/image';
import styles from '../item-card/itemCard-styles/itemCard.module.scss';
import PhoneGallery from './components/PhoneGallery';
import { getDetailedItem } from '@/services/fetchClient';
import { Categories } from '@/types/Categories';
import { Carousel } from '@components/ui/Carousel/Carousel';

export default async function ItemCard() {
  const productId = 'apple-watch-series-4-40mm-silver';
  const product = await getDetailedItem(Categories.Accessories, productId);

  if (!product) {
    return <p>product not found</p>;
  }

  return (
    <div className={styles.container_item_card}>
      <section
        className={`${styles['item_card-section']} ${styles['item_card-section-main']}`}
      >
        <h3 className={styles['item_card__title']}>
          {product.name}(iMT9G2FS/A)
        </h3>
        <div className={styles.item_card}>
          <PhoneGallery phone={product} />
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
                  {product.colorsAvailable.map((color) => (
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
                {product.capacityAvailable.map((cap) => (
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
                ${product.priceDiscount}
              </p>
              <p className={styles['item_card__info-price-regular']}>
                ${product.priceRegular}
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
                <dd>{product.screen}</dd>
                <dt>Resolution</dt>
                <dd>{product.resolution}</dd>
                <dt>Processor</dt>
                <dd>{product.processor}</dd>
                <dt>RAM</dt>
                <dd>{product.ram}</dd>
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

          {product.description?.map((section, i) => (
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
              { name: 'Screen', value: product.screen },
              { name: 'Resolution', value: product.resolution },
              { name: 'Processor', value: product.processor },
              { name: 'RAM', value: product.ram },
              { name: 'Built in memory', value: product.capacity },
              { name: 'Camera', value: product.camera },
              { name: 'Zoom', value: product.zoom },
              { name: 'Cell', value: product.cell?.join(', ') },
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
        <Carousel title="You may also like" items={[]} /> {/* TODO : NEED TO ADD ACTUAL LOGIC HERE */}
      </section>
    </div>
  );
}
