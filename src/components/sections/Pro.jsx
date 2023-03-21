import React from 'react';
import person from '../../assets/img/DSC00639.png';
import Age from './Age.jsx';
import Contacts from './Contacts.jsx';
import Person from './Person.jsx';

const Pro = () => {
  return (
    <section className='main--pro'>
        <h2 className="main--title">
          Сыровежко Николай Алексеевич
        </h2>
        <Person />
        <Contacts
          classNameList="main--contacts"
          classNameItem="main--contacts--item"
          classNameLink="main--contacts--link"
          classNameImg="main--contacts--img"
        />
    </section>
  );
};

export default Pro;