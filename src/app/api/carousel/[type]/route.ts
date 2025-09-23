import { NextResponse } from 'next/server';
import products from '@/app/api/data/products.json';

export async function GET(
  req: Request,
  { params }: { params: { type: string } },
) {
  const { type } = params;

  function getRandomItems<T>(arr: T[], count: number): T[] {
    return arr
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
  }
  let data;

  switch (type) {
    case 'new':
      data = [...products].sort((a, b) => b.year - a.year).slice(0, 30);
      break;

    case 'sale':
      data = products
        .filter((item) => item.price < item.fullPrice)
        .sort((a, b) => {
          const discountA = a.fullPrice - a.price;
          const discountB = b.fullPrice - b.price;
          return discountB - discountA;
        });
      break;

    case 'recommended':
      data = getRandomItems(products, 5);
      break;

    default:
      return NextResponse.json(
        { error: 'Unknown carousel type' },
        { status: 400 },
      );
  }

  return NextResponse.json(data);
}
