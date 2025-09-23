import { Breadcrumbs } from '@components/ui/Breadcrumbs/Breadcrumbs';

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
