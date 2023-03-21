import React from 'react';
import person from '../../assets/img/DSC00639.png';
import Age from './Age.jsx';
import Contacts from './Contacts.jsx';
import Person from './Person.jsx';

const Pro = () => {
  return (
    <section className='main__pro'>
        <h2 className="main__title">
          Сыровежко Николай Алексеевич
        </h2>
        <Person />
        <Contacts
          classNameList="main__contacts"
          classNameItem="main__contacts_item"
          classNameLink="main__contacts_link"
          classNameImg="main__contacts_img"
        />
    </section>
  );
};

export default Pro;