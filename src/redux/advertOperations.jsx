import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6461dd0e491f9402f4ac4549.mockapi.io/';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/advert');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
