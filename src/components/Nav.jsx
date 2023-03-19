import React from 'react';

const Nav = () => {
  return (
    <nav className='header--nav'>
      <ul className="header--nav--burger">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul className='header--nav--list'>
        <li className="header--nav--item">
          <a href="#">опыт</a>
        </li>
        <li className="header--nav--item">
          <a href="#">образование</a>
        </li>
        <li className="header--nav--item">
          <a href="#">навыки</a>
        </li>
        <li className="header--nav--item">
          <a href="#">обо мне</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;