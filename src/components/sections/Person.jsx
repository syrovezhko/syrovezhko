import React from 'react';
import person from '../../assets/img/DSC00639.png';
import Age from './Age.jsx';

const Person = () => {
  return (
    <div className='main--pro--person'>
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
    </div>
  );
};

export default Person;