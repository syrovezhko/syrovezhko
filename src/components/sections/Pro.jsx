import React from 'react';
import person from '../../assets/img/DSC00639.png';
import Age from './Age.jsx';
import Contacts from './Contacts.jsx';

const Pro = () => {
  return (
    <section className='main--pro'>
      <h2 className="main--pro--title">
        Сыровежко Николай Алексеевич
      </h2>
      <img
        src={person}
        alt="person"
        className='main--pro--img' />
        <Age 
          className="main--pro--age"
          dateOfBirth="02/13/1994"/>
        <p className="main--pro--age">
          Москва, м. Планерная
        </p>
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