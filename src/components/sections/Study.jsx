import React from 'react';

const Study = ({example}) => {
  return (
    <div className="main__study">
      <h3 className="main__study_college">
        {example.college}
      </h3>
      <h4 className="main__study_major">
        {example.major}
      </h4>
      <h4 className="main__study_period">
        {example.period}
      </h4>
    </div>
  );
};

export default Study;