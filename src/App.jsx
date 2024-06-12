import css from './App.module.css';
import contactsData from './db';
import ContactForm from './components/contactform/ContactForm';
import ContactList from './components/contactlist/ContactList';
import SearchBox from './components/searchbox/SearchBox';
import { useEffect, useState } from 'react';
function App() {

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || []);
  const [search, setSearch] = useState("");

  useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
   const handleDelete = (id) => {
    const filteredContacts = contacts.filter((item) => item.id !== id);
    setContacts(filteredContacts);
  }
  return (
    <div className={css['container']}>
      <h1 className={css['app-title']}>Phonebook</h1>
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <SearchBox search={search} setSearch={setSearch}  />
      <ContactList
        handleDelete={handleDelete}
        contactsData={contacts.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))}
      />
    </div>
  );
}

export default App;