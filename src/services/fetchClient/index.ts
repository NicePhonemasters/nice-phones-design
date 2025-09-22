import { Categories } from '@/types/Categories';
import { DetailedItem } from '@/types/DetailedItem';
import { ItemCard } from '@/types/ItemCard';
import { SortType } from '@/types/SortType';

const client = {
  async get<T>(url: string) {
    const response = await fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  },
};

type PaginatedSearchParams = {
  sortBy: SortType;
  currentPage: string;
  perPage: string;
};

type paginatedApi = {
  totalItems: number;
  items: ItemCard[];
};

export async function getPaginatedItems(
  category: Categories,
  searchParams: PaginatedSearchParams,
) {
  const urlSearchParams = new URLSearchParams(searchParams);

  return await client.get<paginatedApi>(`/api/${category}?${urlSearchParams}`);
}

export async function getSpecificItems(...rest: number[]) {
  const urlSearchParams = new URLSearchParams({ ids: rest.join(',') });

  return await client.get<ItemCard[]>(`/api/items?${urlSearchParams}`);
}

export async function getGeneralCategory(category: Categories) {
  return await client.get<ItemCard[]>(`/api/${category}`);
}

export async function getDetailedItem(category: Categories, itemId: string) {
  return await client.get<DetailedItem>(`/api/${category}/${itemId}`);
}
