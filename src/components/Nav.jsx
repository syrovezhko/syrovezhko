import React from 'react';

const Nav = () => {
  return (
    <nav className='header--nav'>
      <div className="header--nav--burger"></div>
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