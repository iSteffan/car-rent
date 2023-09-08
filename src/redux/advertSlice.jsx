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
      //   .addCase(fetchAdverts.fulfilled, (state, action) => {
      //     state.isLoading = false;
      //     state.error = null;
      //     state.items = action.payload || [];
      //   })
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(fetchAdverts.fulfilled, handleFetchAdvertsSuccess);
  },
});

export const advertsReducer = advertsSlice.reducer;

// Selector
export const selectAdverts = state => state.items;
export const selectIsLoading = state => state.isLoading;
export const selectError = state => state.error;