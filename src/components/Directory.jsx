import React, { Component } from 'react';
import contactsData from '../contactsData';
import ContactCard from './ContactCard';
import AddContact from './AddContact';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      //contacts: contactsData,
      add: []
    };

    this.add = this.add.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.delete = this.delete.bind(this);
  }

  add() {
    console.log('Este boton agregara un contacto al directorio');
  }

  handleAdd() {
    //let contacts = this.state.contacts;
    //let agenda = this.state.add;
    //agenda.push(...contactsData);
    this.setState({
      //add: agenda
      add: contactsData
    });
  }

  delete() {
    this.setState({
      add: []
    });
  }

  render() {
    const card = this.state.add.map((item, index) => <ContactCard key={index} contacts={item} />);
    return (
      <>
        <AddContact event={this.handleAdd} name={'Agregar'} />
        <AddContact event={this.delete} name={'Borrar'} />
        {this.state.add.length === 0 ? <p>No hay contactos</p> : card}
      </>
    );
  }
}

export default Directory;
