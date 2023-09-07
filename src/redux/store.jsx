import { configureStore } from '@reduxjs/toolkit';
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
import { advertsReducer } from './advertSlice';

import storage from 'redux-persist/lib/storage';

// const rootReducer = combineReducers({});
const advertsPersistConfig = {
  key: 'advert',
  storage,
};

export const store = configureStore({
  reducer: persistReducer(advertsPersistConfig, advertsReducer),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
