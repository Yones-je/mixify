import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ openCabinet, setOpenCabinet }) => {
  return (
    <nav>
      <h1>Mixify</h1>
      <button onClick={() => setOpenCabinet(!openCabinet)}>
        <FontAwesomeIcon icon={faBars} />
        <p>Cabinet</p>
      </button>
    </nav>
  );
};

export default Nav;
