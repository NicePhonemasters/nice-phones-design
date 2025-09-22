import { Categories } from '@/types/Categories';
import { SortType } from '@/types/SortType';

const client = {
  async get(url: string) {
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  },
};

type PaginatedSearchParams = {
  sortBy: SortType;
  currentPage: string;
  perPage: string;
};

export async function getPaginatedItems(
  category: Categories,
  searchParams: PaginatedSearchParams,
) {
  const urlSearchParams = new URLSearchParams(searchParams);

  return await client.get(`/api/${category}?${urlSearchParams}`);
}

export async function getSpecificItems(...rest: number[]) {
  const urlSearchParams = new URLSearchParams({ ids: rest.join(',') });

  return await client.get(`/api/items?${urlSearchParams}`);
}

export async function getGeneralCategory(category: Categories) {
  return await client.get(`/api/${category}`);
}

export async function getDetailedItem(category: Categories, itemId: string) {
  return await client.get(`/api/${category}/${itemId}`);
}
