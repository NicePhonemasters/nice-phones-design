## Nice Phones Design

An online store for phones, tablets, and accessories. Fast, responsive, and easy to use.

### What’s inside (in simple terms)

- Next.js + React: modern framework for a fast website.
- TypeScript: better editor hints and fewer errors.
- Redux with browser persistence: cart and favourites stay after reloads.
- SCSS modules: clean and isolated styles.
- Animations: smooth effects (GSAP, Framer Motion).
- Carousels: product sliders (Swiper).

### How it’s organized

- `src/app` — pages and site layout.
  - `(home)` — home page.
  - `catalog` — product catalog and categories.
  - `cart` — shopping cart page.
  - `favourites` — favourite items.
  - `api` — internal data/endpoints.
- `src/components` — reusable blocks: header, footer, product cards, buttons, etc.
- `src/styles` — global styles, fonts, theme colors.
- `src/slices` and `src/store` — app state (cart, favourites).
- `src/types` — data types (what a product/card looks like).
- `public/img` — product images and banners.

### Key features

- Browse catalog: phones, tablets, accessories.
- Cart: add/remove items, manage quantities.
- Favourites: quick access to liked items.
- Works great on mobile, tablet, and desktop.
- Smooth animations and clear navigation.

### How to run

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Start production build
npm start
```

### Useful commands

- `npm run lint` — code check
- `npm run lint:scss` — style check
- `npm run format` — auto-formatting

### Where to find things

- Header/menu: `src/components/Header`
- Product card: `src/components/ProductCard`
- Cart and favourites: `src/slices`, `src/store`
- Global styles and colors: `src/styles`