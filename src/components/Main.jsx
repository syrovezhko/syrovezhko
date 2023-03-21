import React from 'react';
import Pro from './sections/Pro.jsx';
import Education from './sections/Education.jsx';
import Line from './sections/Line.jsx';
import Experience from './sections/Experience.jsx';
import Skills from './sections/Skills.jsx';
import About from './sections/About.jsx';

const Main = ({term, lang}) => {
  return (
    <main className='main' id='main'>
      <div className="container">
        <Pro
          lang={lang}
          term={term}
        />
        <Line style={'line'}/>
        <About
          lang={lang}
          term={term}
        />
        <Line style={'line'}/>
        <Skills
          lang={lang}
          term={term}
        />
        <Line style={'line'}/>
        <Education
          lang={lang}
          term={term}
        />
        <Line style={'line'}/>
        <Experience
          lang={lang}
          term={term}
        />
        <Line style={'line'}/>
      </div>
    </main>
  );
};

export default Main;