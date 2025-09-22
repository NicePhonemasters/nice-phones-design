import { NextResponse } from 'next/server';

import accessories from '@/app/api/data/accessories.json';
import phones from '@/app/api/data/phones.json';
import tablets from '@/app/api/data/tablets.json';
import { Categories, isCategory } from '@/types/Categories';

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: {
      category: string;
      itemId: string;
    };
  },
) {
  const { category, itemId } = await params;

  if (!isCategory(category)) {
    return NextResponse.json(
      { error: 'Incorrect request parameters' },
      { status: 400 },
    );
  }

  let newResponseJson = {};

  switch (category) {
    case Categories.Accessories:
      newResponseJson = accessories.find((item) => item.id === itemId);
      break;
    case Categories.Phones:
      newResponseJson = phones.find((item) => item.id === itemId);
      break;
    case Categories.Tablets:
      newResponseJson = tablets.find((item) => item.id === itemId);
      break;
  }

  if (!newResponseJson) {
    return NextResponse.json(
      { error: 'Incorrect request parameters' },
      { status: 400 },
    );
  }

  return NextResponse.json(newResponseJson);
}
