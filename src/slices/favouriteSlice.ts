import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

import { ItemCard } from '@/types/ItemCard';

type FavouritesState = {
  items: ItemCard[];
};

const initialState: FavouritesState = { items: [] };
console.log(initialState);

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ItemCard>) {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (!existing) {
        state.items.push(action.payload);
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.itemId !== action.payload);
    },
    clearFavourites(state) {
      state.items = [];
    },
  },
});

export const selectFavouriteItems = (state: RootState) =>
  state.favourites.items;
export const selectIsInFavourites = (itemId: string) => (state: RootState) => {
  return state.favourites.items.some((item) => item.itemId === itemId);
};

export const { addItem, removeItem, clearFavourites } = favouriteSlice.actions;
export const favouriteReducer = favouriteSlice.reducer;
