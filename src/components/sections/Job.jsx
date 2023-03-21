import React from 'react';

const Job = ({example}) => {
  return (
    <div className='main--job'>
      <h3 className="main--job--title">
        {example.title}
      </h3>
      <h4 className="main--job--company-name">
        {example.name}
      </h4>
      <h4 className="main--job--period">
        {example.period}
      </h4>
    </div>
  );
};

export default Job;