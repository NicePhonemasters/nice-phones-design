import { Metadata } from 'next';
import { Breadcrumbs } from '@components/ui/Breadcrumbs/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Favourites',
  description: 'Browse your favourite collection of products.',
  alternates: {
    canonical: '/favourites',
  },
};

export default function FavouritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  );
}
