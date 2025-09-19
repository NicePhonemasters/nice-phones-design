import { Breadcrumbs } from '@components/ui/Breadcrumbs/Breadcrumbs';

export default function CatalogLayout({
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
