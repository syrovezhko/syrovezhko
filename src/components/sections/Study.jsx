import React from 'react';
// import Line from './Line.jsx';

const Study = ({example}) => {
  return (
    <div className="main--study">
      <h3 className="main--study--college">
        {example.college}
      </h3>
      <h4 className="main--study--major">
        {example.major}
      </h4>
      <h4 className="main--study--period">
        {example.period}
      </h4>
      {/* <Line style={'line--dotted'} /> */}
    </div>
  );
};

export default Study;