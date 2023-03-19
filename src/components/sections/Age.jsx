import React from 'react';

const Age = ({dateOfBirth, className}) => {

  function age(date) { // string: "02/13/1994"
    let dob = new Date(date);
    let month_diff = Date.now() - dob.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    return Math.abs(year - 1970);
  }

  function ending (date) {
    console.log((date % 10))
    if ((date % 10) === 1) {
      return "год";
    } else if ((date % 10) === 0
            || (date % 10) >=5
            || date >= 10 && date <= 20) {
      return "лет";
    } else {
      return "года";
    }
  }
  
  return (
    <p className={className}>
      Возраст: {age(dateOfBirth)} {ending(age(dateOfBirth))}
    </p>
  );
};

export default Age;