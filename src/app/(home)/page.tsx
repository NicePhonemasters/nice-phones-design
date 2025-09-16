import { HomePage } from './HomePage';
import { ButtonPagination } from '@components/ui/Buttons/Pagination';

export default function App() {
  return (
    <div>
      <HomePage />

      <ButtonPagination pageCount={5} />
      <p>lublu next js 12345 12345</p>
    </div>
  );
}
