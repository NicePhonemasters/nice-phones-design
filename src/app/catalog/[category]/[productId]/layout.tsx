import { BackNav } from '@components/ui/BackNav/BackNav';

export default function ItemCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BackNav />
      {children}
    </>
  );
}
