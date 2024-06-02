import { configureStore } from '@reduxjs/toolkit';
import { CurrencySlice } from './currencySlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'currency',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, CurrencySlice.reducer);

export const store = configureStore({
  reducer: {
    [CurrencySlice.name]: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
