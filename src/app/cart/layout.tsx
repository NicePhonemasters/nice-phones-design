import { BackNav } from '@components/ui/BackNav/BackNav';

export default function CartLayout({
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
