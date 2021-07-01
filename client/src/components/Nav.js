import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ openCabinet, setOpenCabinet }) => {
  return (
    <div>
      <button onClick={() => setOpenCabinet(!openCabinet)}>
        Cabinet
        <FontAwesomeIcon icon={faBars} />
      </button>
      <h1>Mixify</h1>
    </div>
  );
};

export default Nav;
