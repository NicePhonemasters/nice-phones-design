import './footer.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            className="logo"
            width={80}
            height={26}
            alt="Nice Gadgets"
          />
        </Link>

        <nav className="footer__nav">
          <ul className="footer__lists">
            <li>
              <Link
                href="github"
                className="footer__nav-link uppercase-text link-is-active"
              >
                Github
              </Link>
            </li>
            <li>
              <Link href="contacts" className="footer__nav-link uppercase-text">
                Contacts
              </Link>
            </li>
            <li>
              <Link href="rights" className="footer__nav-link uppercase-text">
                Rights
              </Link>
            </li>
          </ul>
        </nav>

        <div className="footer__right">
          <p className="footer__right-text small-text">Back to top</p>
          <button className="footer__button-top">q</button>
        </div>
      </div>
    </footer>
  );
}
