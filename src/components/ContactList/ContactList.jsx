import { useSelector } from 'react-redux';
import { List } from './ContactListStyle';
import { ContactItem } from '../ContactItem/ContactItem';
import propTypes from 'prop-types';

export const ContactList = () => {
  const contacts = useSelector(state => state.phonebook.contacts.items);
  const filter = useSelector(state => state.phonebook.filter.keyword);
  const getFiltredContacts = () => {
    return filter
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  };

  const filtredContacts = getFiltredContacts();

  return (
    <List>
      {contacts.length > 0 &&
        filtredContacts.map(({ name, number, id }) => (
          <ContactItem key={id} name={name} id={id} number={number} />
        ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object),
  onDelete: propTypes.func,
};
