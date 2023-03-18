import React from 'react';
import eng from '../assets/icon/eng.png'
import rus from '../assets/icon/rus.png'
import day from '../assets/icon/day.png'
import night from '../assets/icon/night.png'

const SwitchPanel = ({term, lang}) => {
  return (
    <ul className='header--switch'>
      <li className="header--switch-term">
        {lang
          ? <img src={rus} alt="rus" />
          : <img src={eng} alt="rus" />
        }
      </li>
      <li className="header--switch-lang">
        {term
          ? <img src={day} alt="rus" />
          : <img src={night} alt="rus" />
        }
      </li>
    </ul>
  );
};

export default SwitchPanel;