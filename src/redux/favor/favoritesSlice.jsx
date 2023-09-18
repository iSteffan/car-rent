import { createSlice } from '@reduxjs/toolkit';
// import { addToFavorites } from './favorOperations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    addFavor: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    deleteFavor: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'favorites',
  storage,
};

export const favoritesReducer = persistReducer(
  persistConfig,
  favoritesSlice.reducer
);

export const { addFavor, deleteFavor } = favoritesSlice.actions;

// Selector
export const selectFavorites = state => state.items;
// const favorSlice = {
//   favorites: [],
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TO_FAVORITES':
//       return {
//         ...state,
//         favorites: [...state.favorites, action.payload],
//       };
//     default:
//       return state;
//   }
// };

// export default favorSlice;

// export const advertsReducer = advertsSlice.reducer;

// // Selector
// export const selectAdverts = state => state.items;
// export const selectIsLoading = state => state.isLoading;
// export const selectError = state => state.error;
// export const selectAmount = state => state.itemPages;
