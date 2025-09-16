import Cart from 'app/cart/Page';
import Catalog from 'app/catalog/Page';
import Favourites from 'app/favorites/favourites';

function App() {
  return (
    <main>
      <Catalog />
      <Cart />
      <Favourites />
    </main>
  );
}

export default App;
