//імпорт функції для створення слайса
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContactsThunk } from './operations';
import { deleteContactsThunk, addContactsThunk } from './operations';
const rejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};
const pending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = 'Something go wrong';
};

const contactsSlice = createSlice({
  name: 'contacts', // назва слайса для девтулза та внутрішніх речей

  //початковий стан слайса
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.isLoading = false;
        state.contacts.error = null;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload
        );
      })
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
      })

      .addMatcher(
        isAnyOf(
          fetchContactsThunk.fulfilled,
          addContactsThunk.fulfilled,
          deleteContactsThunk.fulfilled
        ),
        state => {
          state.contacts.isLoading = false;
        }
      )

      .addMatcher(
        isAnyOf(fetchContactsThunk.pending, addContactsThunk.pending),
        pending
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          addContactsThunk.rejected,
          deleteContactsThunk.rejected
        ),
        rejected
      );
  },
});
// Екпортуємо екшени, щоб вони працювали в компонентах при dispatch
export const { filterContacts } = contactsSlice.actions;
// Eкспортуємо редьюсер для того, щоб додати його в configureStore, котрий в store.js
export const contactsReducer = contactsSlice.reducer;
