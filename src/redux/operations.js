//https://64de2bf3825d19d9bfb23b1a.mockapi.io/contacts

import { createAsyncThunk } from '@reduxjs/toolkit';

export const API = axios.create({
  baseURL: 'https://64de2bf3825d19d9bfb23b1a.mockapi.io',
});

export const fetchPostThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
