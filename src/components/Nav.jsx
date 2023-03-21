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
          <a href="#about">обо мне</a>
        </li>
        <li className="header__nav_item">
          <a href="#skills">навыки</a>
        </li>
        <li className="header__nav_item">
          <a href="#education">образование</a>
        </li>
        <li className="header__nav_item">
          <a href="#experience">опыт</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;