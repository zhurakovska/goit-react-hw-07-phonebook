import React from 'react';
import { FormData } from './Form/FormData';
import { Contacts } from './ContactLists/Contacts';
import { Filter } from './Filter/Filter';

import { Container, Title } from './Form/Form.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <Container>
      <Title>Phonebook</Title>
      <FormData />

      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Container>
  );
};
