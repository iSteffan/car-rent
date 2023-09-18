import { createSlice } from '@reduxjs/toolkit';
// import { addToFavorites } from './favorOperations';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorite: [], // Оновлено favorite на favorites
  },
  reducers: {
    addFavor: (state, action) => {
      state.favorite = [...state.favorite, action.payload]; // Оновлено items на favorites
    },
    deleteFavor: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload
      ); // Оновлено items на favorites
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;

export const { addFavor, deleteFavor } = favoritesSlice.actions;

// Selector
export const selectFavorites = state => state.favorites.favorite;
