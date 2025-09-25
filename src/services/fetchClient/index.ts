import { Categories } from '@/types/Categories';
import { DetailedItem } from '@/types/DetailedItem';
import { ItemCard } from '@/types/ItemCard';
import { SortType } from '@/types/SortType';
import { getBaseUrl } from '@/utils/getBaseUrl';

const client = {
  async get<T>(url: string) {
    const baseUrl = getBaseUrl();

    const response = await fetch(`${baseUrl}${url}`);

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
  data: ItemCard[];
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

export async function getItemCardData(itemId: string) {
  const urlSearchParams = new URLSearchParams();

  urlSearchParams.set('id', itemId);

  return await client.get<{
    itemCard: ItemCard;
  }>(`/api/items?${urlSearchParams}`);
}

export async function getCategoryCount(category: Categories) {
  return await client.get<{
    categoryItems: number;
  }>(`/api/count/${category}`);
}
