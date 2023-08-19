import React, { useState } from 'react';
import { Form, Label, Input, Button } from './Form.styled';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addContactsThunk } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export const FormData = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const { name, number } = formData;
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    // Перевіряє, чи існує контакт з таким самим ім'ям у списку контактів.
    const contactExists = contacts.some(
      existingName => existingName.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      alert(`${name} is already exist`);
      return;
    }

    dispatch(addContactsThunk({ name, number }));
    setFormData(INITIAL_STATE);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number:
          <Input
            onChange={e => setFormData({ ...formData, number: e.target.value })}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button>Add contact</Button>
      </Form>
    </>
  );
};
