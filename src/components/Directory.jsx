import React, { Component } from 'react';
import contactsData from '../contactsData';
import ContactCard from './ContactCard';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contactsData
    };
  }

  render() {
    const card = this.state.contacts.map((item, index) => (
      <ContactCard key={index} contacts={item} />
    ));
    return <>{card}</>;
  }
}

export default Directory;
