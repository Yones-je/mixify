import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ openCabinet, setOpenCabinet, show, setShow }) => {
  return (
    <nav>
      <button
        className={show ? 'button--active' : ''}
        onClick={() => setShow(!show)}>
        Trending
      </button>
      <h1>Mixify</h1>
      <button
        className={openCabinet ? 'button--active' : ''}
        onClick={() => setOpenCabinet(!openCabinet)}>
        <FontAwesomeIcon icon={faBars} />
        <p>Cabinet</p>
      </button>
    </nav>
  );
};

export default Nav;
