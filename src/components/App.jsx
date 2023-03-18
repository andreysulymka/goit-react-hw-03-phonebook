import { Component } from "react";
import List from "./List/List";
import ContactEditor from "./ContactEditor/ContactEditor";
import { nanoid } from 'nanoid';
import { Filter } from "./Filter/Filter";
import { Container } from "./App.styled";


 export default class App extends Component {
   state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }
   
   addContact = data => {
     const newUser = {
    id: nanoid(),
       name: data.name,
     number: data.number
     }
     const existingContact = this.state.contacts.find((element) =>
      element.name.toLowerCase() === data.name.toLowerCase()
    );
    if(existingContact) {
      window.alert(`${data.name} is already in contacts`);
      return;
    }; 
     this.setState(prevState => ({
       contacts: [newUser, ...prevState.contacts]
     }))
   }

   deleteContact = (contactId) => {
     this.setState(prevState => ({
       contacts: prevState.contacts.filter(contact=> contact.id !==contactId)
     }))
   }
   changeFilter = e => {
     this.setState({filter: e.currentTarget.value})
   }
   getVisibleContacts = () => {
     const normalizedContacts = this.state.filter.toLowerCase();
     return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedContacts))
   }
  
   render() {
     const visibleContacts = this.getVisibleContacts();

     return (
       <Container>
         <h1>Phonebook</h1>
         <ContactEditor addContact={this.addContact} />
         <h2>Contacts</h2>
         <Filter value={this.state.filter} onChange={this.changeFilter} />
         <List contacts={visibleContacts} onDeleteContact={this.deleteContact} />
         </Container>
    )
  }
}