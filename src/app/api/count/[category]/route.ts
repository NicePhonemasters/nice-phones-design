import { NextResponse } from 'next/server';

import products from '@/app/api/data/products.json';
import { isCategory } from '@/types/Categories';

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: Promise<{
      category: string;
    }>;
  },
) {
  const { category } = await params;

  if (!isCategory(category)) {
    return NextResponse.json(
      { error: 'Incorrect request parameters' },
      { status: 400 },
    );
  }

  const totalCategoryItems = products.filter(
    (item) => item.category === category,
  ).length;

  return NextResponse.json({
    categoryItems: totalCategoryItems,
  });
}
