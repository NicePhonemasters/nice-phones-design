import styles from './home.module.scss';
import { Slider } from './Slider/Slider';
import { CarouselTypes } from '@/types/CarouselTypes';
import { Categories } from '@/app/(home)/HomePage/Categories/Categories';
import { Carousel } from '@components/ui/Carousel/Carousel';
import { getCategoryCount } from '@/services/fetchClient';
import { Categories as ProductCategories } from '@/types/Categories';

export async function HomePage() {
  console.log(process.env);
  const tabletsCount = await getCategoryCount(ProductCategories.Tablets);
  const phonesCount = await getCategoryCount(ProductCategories.Phones);
  const accessoriesCount = await getCategoryCount(
    ProductCategories.Accessories,
  );

  return (
    <section className={styles.home}>
      <div className={styles.homeContainer}>
        <h1 className={styles.homeTitle}>Welcome to Nice Gadgets store!</h1>
        <Slider />
        <Carousel title="Brand new models" type={CarouselTypes.new} />
        <Categories
          phones={phonesCount.categoryItems}
          tablets={tabletsCount.categoryItems}
          accessories={accessoriesCount.categoryItems}
        />
        <Carousel title="Hot prices" type={CarouselTypes.sale} />
      </div>
    </section>
  );
}
