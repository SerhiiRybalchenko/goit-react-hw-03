import css from './ContactList.module.css';
import Contact from './contact/Contact';
export default function ContactList({ contactsData, handleDelete }) {
  return (
    <ul className={css['contact-list']}>
      {contactsData.map(contact => (
        <li className={css['contact-item']} key={contact.id}>
          <Contact contact={contact} handleDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}