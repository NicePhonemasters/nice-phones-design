import { Categories } from '@components/HomePage/Categories/Categories';
import './home.scss';
import { Slider } from './Slider/Slider';
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
    <section className="home">
      <div className="home__container">
        <h1 className="home__title">Welcome to Nice Gadgets store!</h1>

        <Slider />

        <section className="home__carusel-new-models">
          <Carousel title="Brand new models" items={items} />
        </section>

        <Categories />

        <section className="home__carusel-hot-prices">
          <Carousel title="Hot prices" items={items} />
        </section>
      </div>
    </section>
  );
};
