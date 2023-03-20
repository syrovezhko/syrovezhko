import React from 'react';
import Pro from './sections/Pro.jsx';
import Education from './sections/Education.jsx';
import Line from './sections/Line.jsx';

const Main = ({term, lang}) => {
  return (
    <main className='main'>
      <div className="container">
        <Pro
          lang={lang}
          term={term}
        />
        <Line />
        <Education
          lang={lang}
          term={term}
        />
      </div>
    </main>
  );
};

export default Main;