import Image from 'next/image';
import Link from 'next/link';
import './categories.scss';

export const Categories = () => {
  return (
    <section className="home__categories">
      <h2 className="home__categories-title">Shop by category</h2>

      <div className="home__categories-container">
        <div className="category__card">
          <Link href="/phones" style={{ textDecoration: 'none' }}>
            <div className="category__card-content">
              <Image
                src="/img/category-phones2.png"
                className="category__phone-image"
                fill
                alt="phones"
              />
            </div>

            <h4 className="category__card-title">Mobile phones</h4>
          </Link>

          <p className="category__card-text small-text">0 models</p>
        </div>

        <div className="category__card">
          <Link href="/phones" style={{ textDecoration: 'none' }}>
            <div className="category__card-content">
              <Image src="/img/category-tablets2.png" fill alt="phones" />
            </div>

            <h4 className="category__card-title">Mobile phones</h4>
          </Link>
          <p className="category__card-text small-text">0 models</p>
        </div>

        <div className="category__card">
          <Link href="/phones" style={{ textDecoration: 'none' }}>
            <div className="category__card-content">
              <Image src="/img/category-accesories2.png" fill alt="phones" />
            </div>

            <h4 className="category__card-title">Mobile phones</h4>
          </Link>
          <p className="category__card-text small-text">0 models</p>
        </div>
      </div>
    </section>
  );
};
