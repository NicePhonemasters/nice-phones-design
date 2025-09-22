import { BackNav } from '@components/ui/BackNav/BackNav';
import { Breadcrumbs } from '@components/ui/Breadcrumbs/Breadcrumbs';

export default function ItemCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumbs />
      <BackNav />
      {children}
    </>
  );
}
