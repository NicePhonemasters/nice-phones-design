import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import { favouriteReducer } from '@/slices/favouriteSlice';
import { cartReducer } from '@/slices/cartSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  favourites: favouriteReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'favourites'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
