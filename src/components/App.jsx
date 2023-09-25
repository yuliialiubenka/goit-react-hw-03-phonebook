import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Wrapper } from './wrapper/wrapper';
import data from '../data/data.json';
import ContactForm from './contactForm/contactForm';
import { ContactList } from './contactList/contactList';
import ContactFilter from './contactFilter/contactFilter';

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  // Saving contacts in localStorage
  componentDidMount() {
    const contacts = localStorage.getItem('contacts'); // Getting contacts from localStorage.
    const savedContacts = JSON.parse(contacts); // Converting data from a JSON string to a JavaScript object.

    if (savedContacts) {
      this.setState({ contacts: savedContacts }); // Setting the received contacts to the “contacts” object.
    }
  }

  componentDidUpdate(_, prevState) {
    // Comparing the current contacts with the previous contact object.
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      // If the contacts have changed, we save them in localStorage.
    }
  }

  // Adding a new contact to your contact list
  addContact = contact => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase().trim() === contact.name.toLowerCase().trim()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
  };

  // Changing the filter value
  changeFilter = event => {
    this.setState({ filter: event.target.value.trim() });
  };

  // Getting the filtered contacts
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // Removing a contact from your list
  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {

    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;

    return (
      <>
        <Wrapper
          title={data.title}
        >
          <ContactForm 
            onSubmit={this.addContact} 
            btnText={data.btnText}
          />
            {this.state.contacts.length > 0 ? (
              <ContactFilter 
                value={filter} 
                onChangeFilter={this.changeFilter}
                title={data.filterTitle}
              />
            ) : (
              <div className='emptyBlock'>
                <p>{data.emptyText1}</p>
                <p>{data.emptyText2}</p>
              </div>
            )}
            {this.state.contacts.length > 0 && (
              <ContactList
                contacts={visibleContacts}
                onRemoveContact={this.removeContact}
              />
            )}
        </Wrapper>
      </>
    )
  }
}