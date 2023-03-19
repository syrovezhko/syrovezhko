import React, { useState } from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';

const App = () => {
  const [lang, setLang] = useState(true);
  const [term, setTerm] = useState(false);

  return (
    <div className='App'>
      <Header
        lang={lang}
        term={term}
      />
      <Main
        lang={lang}
        term={term}
      />
    </div>
  );
};

export default App;