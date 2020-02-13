import React, { Component } from 'react';
import contactsData from '../contactsData';
import ContactCard from './ContactCard';
import AddContact from './AddContact';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contactsData
    };

    this.add = this.add.bind(this);
  }

  add() {
    console.log('Este boton agregara un contacto al directorio');
  }

  render() {
    const card = this.state.contacts.map((item, index) => (
      <ContactCard key={index} contacts={item} />
    ));
    return (
      <>
        <AddContact event={this.add} />
        {card}
      </>
    );
  }
}

export default Directory;
