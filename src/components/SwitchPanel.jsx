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
        <a href="https://hh.ru/resume_converter/%D0%A1%D1%8B%D1%80%D0%BE%D0%B2%D0%B5%D0%B6%D0%BA%D0%BE%20%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9%20%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.pdf?hash=32369b73ff08cb73dc0039ed1f35596a467a4d&type=pdf&hhtmSource=resume&hhtmFrom=resume_list" download>
          <img src={download} alt="download" />
        </a>
      </li>
    </ul>
  );
};

export default SwitchPanel;