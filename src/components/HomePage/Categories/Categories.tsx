import Image from 'next/image';
import Link from 'next/link';
import styles from './categories.module.scss';

export const Categories = () => {
  return (
    <section className={styles.homeCategories}>
      <h2 className={styles.homeCategoriesTitle}>Shop by category</h2>

      <div className={styles.homeCategoriesContainer}>
        <div className={styles.categoryCard}>
          <Link href="/phones" className={styles.categoryCardLink}>
            <div className={styles.categoryCardContent}>
              <Image
                src="/img/category-phones2.png"
                className={styles.categoryPhoneImage}
                fill
                alt="phones"
              />
            </div>

            <h4 className={styles.categoryCardTitle}>Mobile phones</h4>
            <p className={`${styles.categoryCardText} smallText`}>0 models</p>
          </Link>
        </div>

        <div className={styles.categoryCard}>
          <Link href="/phones" className={styles.categoryCardLink}>
            <div className={styles.categoryCardContent}>
              <Image
                src="/img/category-tablets2.png"
                className={styles.categoryTabletImage}
                fill
                alt="tablets"
              />
            </div>

            <h4 className={styles.categoryCardTitle}>Tablets</h4>

            <p className={`${styles.categoryCardText} smallText`}>0 models</p>
          </Link>
        </div>

        <div className={styles.categoryCard}>
          <Link href="/phones" className={styles.categoryCardLink}>
            <div className={styles.categoryCardContent}>
              <Image
                src="/img/category-accesories2.png"
                className={styles.categoryAccessoriesImage}
                fill
                alt="accessories"
              />
            </div>

            <h4 className={styles.categoryCardTitle}>Accessories</h4>
            <p className={`${styles.categoryCardText} smallText`}>0 models</p>
          </Link>
        </div>
      </div>
    </section>
  );
};
