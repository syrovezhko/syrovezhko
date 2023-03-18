import React, { useState } from 'react';
import Nav from './Nav.jsx';
import SwitchPanel from './SwitchPanel.jsx';

const Header = () => {
  const [lang, setLang] = useState(true);
  const [term, setTerm] = useState(true);
  
  return (
    <header className='header'>
      <h1 className='header--title'>Front-end Developer</h1>
      <Nav />
      <SwitchPanel
        lang={lang}
        term={term}
      />
    </header>
  );
};

export default Header;