import { Metadata } from 'next';
import styles from './itemCard-styles/itemCard.module.scss';
import PhoneGallery from './components/PhoneGallery';
import { getDetailedItem, getItemCardData } from '@/services/fetchClient';
import { Categories } from '@/types/Categories';
import { SelectColor } from '@components/ui/ItemCardUI/SelectColor/SelectColor';
import { SelectCapacity } from '@components/ui/ItemCardUI/SelectCapacity/SelectCapacity';
import AddToCartButton from '@components/ui/Buttons/AddToCardButton/AddToCardButton';
import FavouriteButton from '@components/ui/Buttons/FavouriteButton/FavouriteButton';
import { Carousel } from '@components/ui/Carousel/Carousel';
import { CarouselTypes } from '@/types/CarouselTypes';
import { BackNav } from '@components/ui/BackNav/BackNav';

type Props = {
  params: Promise<{
    category: string;
    productId: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, productId } = await params;

  // Fetch product details
  const product = await getDetailedItem(category as Categories, productId);

  const title = `${product.name}`;
  const description = `${product.description}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/catalog/${category}/${productId}`,
    },
  };
}

export default async function ItemCard({ params }: Props) {
  const { category, productId } = await params;
  const product = await getDetailedItem(category as Categories, productId);
  const itemCardData = await getItemCardData(product.id);
  console.log(itemCardData);
  const itemCard = itemCardData.itemCard;
  const currentCapacity = product.capacity.toLocaleLowerCase();
  const currentColor = product.color;

  return (
    <div className={styles.container_item_card}>
      <BackNav />
      <section
        className={`${styles['item_card-section']} ${styles['item_card-section-main']}`}
      >
        <h3 className={styles['item_card__title']}>{product.name}</h3>
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
                      <SelectColor
                        productNamespace={product.namespaceId}
                        color={color}
                        currentCapacity={currentCapacity}
                        currentColor={currentColor}
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
                    <SelectCapacity
                      capacity={cap}
                      currentColor={currentColor}
                      currentCapacity={currentCapacity}
                      productNamespace={product.namespaceId}
                    />
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
              <div className={styles['item_card__info-buy-section-button-buy']}>
                <AddToCartButton item={itemCard} />
              </div>
              <div
                className={
                  styles['item_card__info-buy-section-button-favourites']
                }
              >
                <FavouriteButton item={itemCard} />
              </div>
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
        <Carousel title="You may also like" type={CarouselTypes.recommended} />
      </section>
    </div>
  );
}
