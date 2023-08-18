//https://64de2bf3825d19d9bfb23b1a.mockapi.io/contacts
//https://64de2bf3825d19d9bfb23b1a.mockapi.io/contacts/:endpoint

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://64de2bf3825d19d9bfb23b1a.mockapi.io/contacts',
});

export const fetchContactsThunk = createAsyncThunk(
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

export const deleteContactsThunk = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await API.delete(`/contacts/${String(id)}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/add',
  async (contact, thunkAPI) => {
    try {
      const { data } = await API.post('/contacts', contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContactsThunk = createAsyncThunk(
  'contacts/filter',
  async (contact, thunkAPI) => {
    try {
      const { data } = await API.put(`/contacts/${contact.id}`, contact);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
