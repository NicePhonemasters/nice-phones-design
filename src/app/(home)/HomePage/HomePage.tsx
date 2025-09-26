import styles from './home.module.scss';
import { SliderTest } from './SliderTest/SliderTest';
import { CarouselTypes } from '@/types/CarouselTypes';
import { Categories } from '@/app/(home)/HomePage/Categories/Categories';
import { Carousel } from '@components/ui/Carousel/Carousel';

export const HomePage = () => {
  return (
    <section className={styles.home}>
      <div className={styles.homeContainer}>
        <SliderTest />

        <div className={styles.containerForPadding}>
          <Carousel title="Brand new models" type={CarouselTypes.new} />
          <Categories />
          <Carousel title="Hot prices" type={CarouselTypes.sale} />
        </div>
      </div>
    </section>
  );
};
