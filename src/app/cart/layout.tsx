import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cart',
  description: 'Access our cart shopping facilities.',
  alternates: {
    canonical: '/cart',
  },
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
