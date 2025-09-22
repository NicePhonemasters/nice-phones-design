import { HomePage } from '../../components/HomePage/HomePage';
import { Loader } from '@components/Loader/Loader';

export default function App() {
  return (
    <div>
      <Loader />
      <HomePage />
    </div>
  );
}
