import React from 'react';

const Cabinet = ({ openCabinet }) => {
  return (
    <div className={`cabinet ${openCabinet ? 'cabinet--active' : ''}`}>
      <h2>Cabinet</h2>
    </div>
  );
};

export default Cabinet;
