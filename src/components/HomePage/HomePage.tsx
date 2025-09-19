import styles from './home.module.scss';
import { Slider } from './Slider/Slider';
import { Categories } from '@components/HomePage/Categories/Categories';
import { Carousel } from '@components/ui/Carousel/Carousel';

export const HomePage = () => {
  const items = [
    '/img/phones/apple-iphone-11/black/00.webp',
    '/img/phones/apple-iphone-11/black/01.webp',
    '/img/phones/apple-iphone-11/black/02.webp',
    '/img/phones/apple-iphone-11/black/03.webp',
    '/img/phones/apple-iphone-11/green/00.webp',
    '/img/phones/apple-iphone-11/green/01.webp',
    '/img/phones/apple-iphone-11/green/02.webp',
    '/img/phones/apple-iphone-11/green/03.webp',
    '/img/phones/apple-iphone-11/green/04.webp',
  ];

  return (
    <section className={styles.home}>
      <div className={styles.homeContainer}>
        <h1 className={styles.homeTitle}>Welcome to Nice Gadgets store!</h1>

        <Slider />

        <section className={styles.homeCarouselNewModels}>
          <Carousel title="Brand new models" items={items} />
        </section>

        <Categories />

        <section className={styles.homeCarouselHotPrices}>
          <Carousel title="Hot prices" items={items} />
        </section>
      </div>
    </section>
  );
};
