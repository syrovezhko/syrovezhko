import React from 'react';
import person from '../../assets/img/DSC00639.png';
import Age from './Age.jsx';

const Person = () => {
  return (
    <div className='main__pro_person'>
      <img
        src={person}
        alt="person"
        className='main__pro_img' />
        <Age 
          className="main__pro_age"
          dateOfBirth="02/13/1994"/>
        <p className="main__pro_age">
          Москва, м. Планерная
        </p>
    </div>
  );
};

export default Person;