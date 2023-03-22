import React from 'react';
import eng from '../assets/icon/eng.png'
import rus from '../assets/icon/rus.png'
import day from '../assets/icon/day.png'
import night from '../assets/icon/night.png'
import download from '../assets/icon/download.svg'

const SwitchPanel = ({term, lang}) => {
  return (
    <ul className='header__switch'>
      {/* <li className="header__switch-term">
        {!lang
          ? <img src={rus} alt="rus" />
          : <img src={eng} alt="rus" />
        }
      </li>
      <li className="header__switch-lang">
        {term
          ? <img src={day} alt="rus" />
          : <img src={night} alt="rus" />
        }
      </li> */}
      <li className="header__switch-download">
        <a href="https://github.com/syrovezhko/syrovezhko/raw/main/cv_ru.pdf" download>
          <img src={download} alt="download" />
        </a>
      </li>
    </ul>
  );
};

export default SwitchPanel;