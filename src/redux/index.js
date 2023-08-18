// імпортуємо функцію створення стору
import { configureStore } from '@reduxjs/toolkit';
//імпортуємо редьюсери
import { contactsReducer } from './contactsSlice';

//Ми створюємо стор та експортуємо його для використання в index.js
export const store = configureStore({
  //додаємо редьюсер
  reducer: {
    contactList: contactsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // відключити devTools
});
