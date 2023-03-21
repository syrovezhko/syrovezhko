import React from 'react';
import Nav from './Nav.jsx';
import SwitchPanel from './SwitchPanel.jsx';

const Header = ({term, lang}) => {
  
  return (
    <header className='header'>
      <div className="container">
        <h1 className='header__title'><a href="#main">Front-end Developer</a></h1>
        <Nav />
        <SwitchPanel
          lang={lang}
          term={term}
        />
      </div>
    </header>
  );
};

export default Header;