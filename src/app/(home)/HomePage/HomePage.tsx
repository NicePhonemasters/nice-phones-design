import { products } from '../../../components/ProductCard/Products';
import styles from './home.module.scss';
import { Slider } from './Slider/Slider';
import { Categories } from '@/app/(home)/HomePage/Categories/Categories';
import { Carousel } from '@components/ui/Carousel/Carousel';

export const HomePage = () => {
  return (
    <section className={styles.home}>
      <div className={styles.homeContainer}>
        <h1 className={styles.homeTitle}>Welcome to Nice Gadgets store!</h1>

        <Slider />

        <Carousel title="Brand new models" items={products} />

        <Categories />

        <Carousel title="Hot prices" items={products} />
      </div>
    </section>
  );
};
