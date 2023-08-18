export const selectContacts = state => state.contactList.contacts.items;
export const selectFilter = state => state.contactList.filter;
export const selectLoader = state => state.contactList.contacts.isLoading;
