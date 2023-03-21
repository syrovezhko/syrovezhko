import React from 'react';
import phone from '../../assets/icon/phone.svg';
import telegram from '../../assets/icon/telegram.svg';
import whatsapp from '../../assets/icon/whatsapp.svg';
import linkedin from '../../assets/icon/linkedin.svg';
import github from '../../assets/icon/github.svg';
import mail from '../../assets/icon/mail.svg';

const Contacts = ({
                    classNameList,
                    classNameItem,
                    classNameLink,
                    classNameImg
                  }) => {
  return (
    <ul className={classNameList}>
      <li className={classNameItem}>
        <a href="https://t.me/NIKOLASHA_NUMBER_ONE" className={classNameLink}>
          <img src={telegram} alt="icon" className={classNameImg} />
          @NIKOLASHA_NUMBER_ONE
          </a>
      </li>
      <li className={classNameItem}>
        <a href="tel:+79852895574" className={classNameLink}>
          <img src={phone} alt="icon" className={classNameImg} />
          +7 (985) 289 55 74
          </a>
      </li>
      <li className={classNameItem}>
        <a href="https://wa.me/79852895574" className={classNameLink}>
          <img src={whatsapp} alt="icon" className={classNameImg} />
          +7 (985) 289 55 74
          </a>
      </li>
      <li className={classNameItem}>
        <a href="https://www.linkedin.com/in/nikolai-syrovezhko/" className={classNameLink}>
          <img src={linkedin} alt="icon" className={classNameImg} />
          Nikolai Syrovezhko
          </a>
      </li>
      <li className={classNameItem}>
        <a href="https://github.com/syrovezhko" className={classNameLink}>
          <img src={github} alt="icon" className={classNameImg} />
          @syrovezhko
          </a>
      </li>
      <li className={classNameItem}>
        <a href="mailto:syrovezhko@list" className={classNameLink}>
          <img src={mail} alt="icon" className={classNameImg} />
          syrovezhko@list.ru
          </a>
      </li>
    </ul>
  );
};

export default Contacts;