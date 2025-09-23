import { NextResponse } from 'next/server';

import getPaginationParams from '@/utils/getPaginationParams';
import prepareCatalogBackendData from '@/utils/prepareBackendCatalogData';

import products from '@/app/api/data/products.json';

import { isCategory } from '@/types/Categories';
import { SortType, isSortType } from '@/types/SortType';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ category: string }> },
) {
  const requestUrl = new URL(req.url);
  const { category } = await params;

  if (!isCategory(category)) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const { sortBy, currentPage, perPage } = getPaginationParams(requestUrl);
  if (sortBy || currentPage || perPage) {
    const sorting = sortBy ? sortBy : SortType.None;

    if (!isSortType(sorting) || !perPage || Number.isNaN(+perPage)) {
      return NextResponse.json(
        { error: 'Incorrect request parameters' },
        { status: 400 },
      );
    }

    let actualCurrentPage = +currentPage;
    if (Number.isNaN(actualCurrentPage)) {
      actualCurrentPage = 1;
    }

    const responseJson = prepareCatalogBackendData(category, {
      sortType: sorting,
      currentPage: actualCurrentPage,
      perPage: +perPage,
    });

    return NextResponse.json(responseJson);
  }

  const responseJson = products.filter(
    (product) => product.category === category,
  );

  return NextResponse.json(responseJson);
}
