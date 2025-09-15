import './home.scss';
import Image from 'next/image';

export const HomePage = () => {
  return (
    <section className="home">
      <div className="home__container">
        <h1 className="home__title">Welcome to Nice Gadgets store!</h1>

        <article className="home__slider">
          <div className="home__slider-container">
            <button className="home__slider-button">{'<'}</button>

            <Image
              src="/images/banner.png"
              className="home__slider-banner"
              width="680"
              height="210"
              alt="banner"
            />

            <button className="home__slider-button">{'>'}</button>
          </div>

          <div className="home__slider-dots">
            <span className="home__slider-dot" />
            <span className="home__slider-dot" />
            <span className="home__slider-dot" />
          </div>
        </article>
      </div>
    </section>
  );
};
