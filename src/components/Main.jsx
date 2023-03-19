import React from 'react';
import Pro from './sections/Pro.jsx';

const Main = ({term, lang}) => {
  return (
    <main className='main'>
      <div className="container">
        <Pro
          lang={lang}
          term={term}
        />
      </div>
    </main>
  );
};

export default Main;