import Image from 'next/image';
import Link from 'next/link';
import './header.scss';
import '@styles/fonts.scss';

export const Header = () => {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Phones', path: '/phones' },
    { title: 'Tablets', path: '/tablets' },
    { title: 'Accessories', path: '/accessories' },
  ];

  return (
    <header className="header">
      <Link href="/">
        <Image
          width={80}
          height={26}
          src="/images/logo.svg"
          className="header__logo"
          alt="Nice Gadgets"
        />
      </Link>

      <nav className="header__nav">
        <ul className="header__lists">
          {navLinks.map((link) => {
            return (
              <li key={link.path}>
                <Link
                  className="header__nav-link uppercase-text"
                  href={link.path}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="header__right">
        <div className="header__right-favourites is-active">
          <Link href="h">
            <Image
              src="/images/heart.svg"
              width={16}
              height={16}
              alt="favourites"
            />
          </Link>
        </div>

        <div className="header__right-cart">
          <Link href="h">
            <Image
              src="/images/shop-cart.svg"
              width={16}
              height={16}
              alt="cart"
            />
          </Link>
        </div>

        <div className="header__burger-menu">
          <Image
            src="/images/burger-menu.svg"
            width={16}
            height={16}
            alt="burger-menu"
          />
        </div>

        <div></div>
      </div>
    </header>
  );
};
