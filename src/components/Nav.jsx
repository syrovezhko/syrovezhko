import React, { useState } from 'react';

const Nav = () => {

  const [burger, setBurger] = useState(false)

  function a (e) {
    alert('test');
    e.stopPropagation()
  }
  return (
    <nav className='header__nav'>
      {/* <ul className="header__nav_burger" onClick={(e) => a(e)}>
        <li></li>
        <li></li>
        <li></li>
      </ul> */}
      <ul className='header__nav_list'>
        <li className="header__nav_item">
          <a href="#">обо мне</a>
        </li>
        <li className="header__nav_item">
          <a href="#">навыки</a>
        </li>
        <li className="header__nav_item">
          <a href="#">образование</a>
        </li>
        <li className="header__nav_item">
          <a href="#">опыт</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;