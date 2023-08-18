import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactsThunk } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

import {
  ContactList,
  ContactItem,
  DeleteButton,
} from 'components/Form/Form.styled';
import { useSelector } from 'react-redux';

export const Contacts = () => {
  //Використовуємо useSelector щоб отримати  дані з редакса
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const filter = useSelector(selectFilter);
  //використовуємо  Діспатч щоб отримати функцию керування редаксом
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContactsThunk(id));
  };

  const getfilteredContacts = () => {
    console.log(contacts, '<<<<');
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = getfilteredContacts();
  return (
    <ContactList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name} {number}
          <DeleteButton onClick={() => handleDelete(id)}>Delete</DeleteButton>
        </ContactItem>
      ))}
    </ContactList>
  );
};
