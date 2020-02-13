import React from 'react';

const ContactCard = ({ contacts }) => (
  <section>
    <h2>{contacts.name}</h2>
    <img src={contacts.imgUrl} alt={contacts.name} />
    <p>{contacts.phone}</p>
    <p>{contacts.email}</p>
  </section>
);

export default ContactCard;
