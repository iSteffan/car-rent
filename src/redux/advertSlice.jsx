import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './advertOperations';

const handlePending = state => {
  return { ...state, isLoading: true };
};

const handleRejected = (state, action) => {
  return { ...state, isLoading: false, error: action.payload };
};

const handleFetchAdvertsSuccess = (state, action) => {
  return { ...state, isLoading: false, error: null, items: action.payload };
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)

      .addCase(fetchAdverts.rejected, handleRejected)

      .addCase(fetchAdverts.fulfilled, handleFetchAdvertsSuccess);
  },
});

export const advertsReducer = advertsSlice.reducer;

// Selector
export const selectContacts = state => state.adverts.items;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectError = state => state.adverts.error;
