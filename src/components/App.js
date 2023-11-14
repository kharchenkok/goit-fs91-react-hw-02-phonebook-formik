import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Section from './Section';
import Notification from './Notification';
import { Container } from '../styles';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  isContactExist = name => {
    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <ToastContainer />

        <Section title="Phonebook">
          <ContactForm
            onFormSubmit={this.addContact}
            isContactExist={this.isContactExist}
          />
        </Section>
        <Section title={'Contacts'}>
          {this.state.contacts.length > 0 ? (
            <>
              <Filter value={this.state.filter} onChange={this.changeFilter} />
              <ContactList
                data={visibleContacts}
                onDeleteContact={this.deleteContact}
              />
            </>
          ) : (
            <Notification text={'No contacts in the list'} />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
