import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist';
import { advertsReducer } from './advertSlice';
import { favoritesReducer } from './favor/favoritesSlice';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favorites: favoritesReducer,
  },
  // reducer: advertsReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
