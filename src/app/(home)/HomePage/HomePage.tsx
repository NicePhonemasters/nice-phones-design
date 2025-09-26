import styles from './home.module.scss';
import { SliderTest } from './SliderTest/SliderTest';
import { CarouselTypes } from '@/types/CarouselTypes';
import { Categories } from '@/app/(home)/HomePage/Categories/Categories';
import { Carousel } from '@components/ui/Carousel/Carousel';
import { Categories as ProductCategories } from '@/types/Categories';
import products from '@/app/api/data/products.json';

export async function HomePage() {
  const tabletsCount = products.filter(
    (item) => item.category === ProductCategories.Tablets,
  ).length;
  const phonesCount = products.filter(
    (item) => item.category === ProductCategories.Phones,
  ).length;
  const accessoriesCount = products.filter(
    (item) => item.category === ProductCategories.Accessories,
  ).length;

  return (
    <section className={styles.home}>
      <div className={styles.homeContainer}>
        <SliderTest />

        <div className={styles.containerForPadding}>
          <Carousel title="Brand new models" type={CarouselTypes.new} />
          <Categories 
            phonesCount={phonesCount}
            tabletsCount={tabletsCount}
            accessoriesCount={accessoriesCount}
           />
          <Carousel title="Hot prices" type={CarouselTypes.sale} />
        </div>
      </div>
    </section>
  );
}
