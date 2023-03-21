import React from 'react';

const Job = ({example}) => {
  return (
    <div className='main__job'>
      <h3 className="main__job_title">
        {example.title}
      </h3>
      <h4 className="main__job_company-name">
        {example.name}
      </h4>
      <h4 className="main__job_period">
        {example.period}
      </h4>
    </div>
  );
};

export default Job;