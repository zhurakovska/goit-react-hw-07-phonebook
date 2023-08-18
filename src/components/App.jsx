import React from 'react';
import { FormData } from './Form/FormData';
import { Contacts } from './ContactLists/Contacts';
import { Filter } from './Filter/Filter';
import { Container, Title } from './Form/Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/operations';
import { selectLoader } from 'redux/selectors';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoader);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <Container>
      <Title>Phonebook</Title>
      <FormData />

      <h2>Contacts</h2>
      <Filter />
      {loading ? <Loader /> : <Contacts />}
    </Container>
  );
};
