import styles from './home.module.scss';
import { Slider } from './Slider/Slider';
import { CarouselTypes } from '@/types/CarouselTypes';
import { Categories } from '@/app/(home)/HomePage/Categories/Categories';
import { Carousel } from '@components/ui/Carousel/Carousel';

export const HomePage = () => {
  return (
    <section className={styles.home}>
      <div className={styles.homeContainer}>
        <h1 className={styles.homeTitle}>Welcome to Nice Gadgets store!</h1>
        <Slider />
        <Carousel title="Brand new models" type={CarouselTypes.new} />
        <Categories />
        <Carousel title="Hot prices" type={CarouselTypes.sale} />
      </div>
    </section>
  );
};
