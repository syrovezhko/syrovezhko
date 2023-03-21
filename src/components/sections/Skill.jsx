import React from 'react';

const Skill = ({example}) => {

  const path = "https://github.com/devicons/devicon/raw/master/icons/" + example.path;
  
  return (
    <img
      className='main__skills_img'
      src={path}
      alt={example.name}
    />
  );
};

export default Skill;