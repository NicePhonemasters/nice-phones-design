import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ItemCard } from '@/types/ItemCard';

type FavouritesState = {
  items: ItemCard[];
};

const initialState: FavouritesState = { items: [] };

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
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    clearFavourites(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearFavourites } = favouriteSlice.actions;
export const favouriteReducer = favouriteSlice.reducer;
