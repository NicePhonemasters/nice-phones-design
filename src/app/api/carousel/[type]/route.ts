import { NextResponse } from 'next/server';
import products from '@/app/api/data/products.json';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const type = url.pathname.split('/').pop(); // получаем type из URL

  if (!type) {
    return NextResponse.json({ error: 'Type is required' }, { status: 400 });
  }

  const getRandomItems = <T>(arr: T[], count: number): T[] =>
    arr
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, count);

  let data;

  switch (type) {
    case 'new':
      data = [...products].sort((a, b) => b.year - a.year).slice(0, 30);
      break;
    case 'sale':
      data = products
        .filter((item) => item.price < item.fullPrice)
        .sort((a, b) => b.fullPrice - b.price - (a.fullPrice - a.price));
      break;
    case 'recommended':
      data = getRandomItems(products, 30);
      break;
    default:
      return NextResponse.json(
        { error: 'Unknown carousel type' },
        { status: 400 },
      );
  }

  return NextResponse.json(data);
}
