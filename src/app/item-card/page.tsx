'use client';

import '../../styles/itemCard.scss';
import Image from 'next/image';

const itemImages = [
  '/iphone-hero.png',
  '/iphone-hero.png',
  '/iphone-hero.png',
  '/iphone-hero.png',
  '/iphone-hero.png',
];

// const colors = [
//   { id: "1", name: "Gold", image: "/iphone-gold.png" },
//   { id: "2", name: "Silver", image: "/iphone-silver.png" },
//   { id: "3", name: "Green", image: "/iphone-green.png" },
//   { id: "4", name: "Black", image: "/iphone-black.png" },
// ];

export function ItemCard() {
  return (
    <div className="container_item_card">
      <section className="item-card-section item-card-section-main">
        <div className="item_card">
          <h3 className="item_card__title">
            Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
          </h3>
          <div className="item_card__image">
            <Image
              src="/iphone-hero.png"
              alt="main-image"
              width={288}
              height={288}
            />
          </div>
          <ul className="item_card__image-list">
            {itemImages.map((image, i) => (
              <li className="item_card__image-list-item" key={i}>
                <Image
                  src={image}
                  alt={`item-image-${i + 1}`}
                  width={50}
                  height={50}
                />
              </li>
            ))}
          </ul>
          <div className="item_card__info">
            <div className="item_card__info-colour-section">
              <div className="item_card__info-colour-section__text">
                <p>Available colors</p>
                <p>ID: 802390</p>
              </div>
              <div className="item_card__info-colour-section__color">
                <ul className="item_card__info-colour-section__color-list">
                  <li className="item_card__info-colour-section__color-list-item">
                    <Image
                      src={'/color-btn-gold.png'}
                      alt="item-card-item"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li className="item_card__info-colour-section__color-list-item">
                    <Image
                      src={'/color-btn-green.png'}
                      alt="item-card-item"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li className="item_card__info-colour-section__color-list-item">
                    <Image
                      src={'/color-btn-grey.png'}
                      alt="item-card-item"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li className="item_card__info-colour-section__color-list-item">
                    <Image
                      src={'/color-btn-white.png'}
                      alt="item-card-item"
                      width={30}
                      height={30}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="item_card__info-capacity-section">
              <p className="item_card__info-capacity-section-text">
                Select capacity
              </p>
              <ul className="item_card__info-capacity-section-list">
                <li className="item_card__info-capacity-section-list-item">
                  64 GB
                </li>
                <li className="item_card__info-capacity-section-list-item">
                  256 GB
                </li>
                <li className="item_card__info-capacity-section-list-item">
                  512 GB
                </li>
              </ul>
            </div>
            <div className="item_card__info-price">
              <p className="item_card__info-price-text">$799</p>
              <p className="item_card__info-price-discount">$1199</p>
            </div>
            <div className="item_card__info-buy-section">
              <button
                type="button"
                className="item_card__info-buy-section-button-buy"
              >
                Add to cart
              </button>
              <button
                type="button"
                className="item_card__info-buy-section-button-favourites"
              >
                <Image
                  src="/like-icon.png"
                  alt="heart icon"
                  width={14}
                  height={12}
                />
              </button>
            </div>
            <div className="item_card__info-description">
              <dl className="item_card__info-description-list">
                <dt>Screen</dt>
                <dd>6.5” OLED</dd>
                <dt>Resolution</dt>
                <dd>2688x1242</dd>
                <dt>Processor</dt>
                <dd>Apple A12 Bionic</dd>
                <dt>RAM</dt>
                <dd>3 GB</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <section className="item-card-section item-card-section-description">
        <div className="item-card-description">
          <h4 className="item-card-description__title">About</h4>
          <h5 className="item-card-description__subtitle">
            And then there was Pro
          </h5>
          <p className="item-card-description__text">
            A transformative triple-camera system that adds tons of capability
            without complexity. An unprecedented leap in battery life. And a
            mind-blowing chip that doubles down on machine learning and pushes
            the boundaries of what a smartphone can do. Welcome to the first
            iPhone powerful enough to be called Pro.
          </p>
          <h5 className="item-card-description__subtitle">Camera</h5>
          <p className="item-card-description__text">
            Meet the first triple-camera system to combine cutting-edge
            technology with the legendary simplicity of iPhone. Capture up to
            four times more scene. Get beautiful images in drastically lower
            light. Shoot the highest-quality video in a smartphone — then edit
            with the same tools you love for photos. You’ve never shot with
            anything like it.
          </p>
          <h5 className="item-card-description__subtitle">
            Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
            Love it.
          </h5>
          <p className="item-card-description__text">
            iPhone 11 Pro lets you capture videos that are beautifully true to
            life, with greater detail and smoother motion. Epic processing power
            means it can shoot 4K video with extended dynamic range and
            cinematic video stabilization — all at 60 fps. You get more creative
            control, too, with four times more scene and powerful new editing
            tools to play with.
          </p>
        </div>
        <div className="item-card-description__tech-specs">
          <h4 className="item-card-description__tech-spec-title">Tech specs</h4>
        </div>
      </section>
      <section className="item-card-section item-card-section-favourites"></section>
    </div>
  );
}

export default ItemCard;
