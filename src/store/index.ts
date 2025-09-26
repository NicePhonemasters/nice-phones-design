import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PERSIST,
  PAUSE,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { favouriteReducer } from '@/slices/favouriteSlice';
import { cartReducer } from '@/slices/cartSlice';
import themeReducer from '@/slices/themeSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  cart: cartReducer,
  favourites: favouriteReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'favourites', 'theme'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
