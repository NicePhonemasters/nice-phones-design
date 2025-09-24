import { NextResponse } from 'next/server';

import products from '@/app/api/data/products.json';

export async function GET(req: Request) {
  const requestUrl = new URL(req.url);

  const id = requestUrl.searchParams.get('id');

  if (id) {
    const itemCard = products.find((item) => item.itemId === id);

    if (!itemCard) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json({
      itemCard,
    });
  }

  const idsSearchParams = requestUrl.searchParams.get('ids');

  if (!idsSearchParams) {
    return NextResponse.json(
      { error: 'Incorrect request parameters' },
      { status: 400 },
    );
  }

  const requestIds = idsSearchParams.split(',').map((id) => +id);

  if (requestIds.some(Number.isNaN)) {
    return NextResponse.json(
      { error: 'Incorrect request parameters' },
      { status: 400 },
    );
  }

  const responseJson = products.filter((product) =>
    requestIds.includes(product.id),
  );

  return NextResponse.json(responseJson);
}
