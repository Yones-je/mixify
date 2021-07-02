import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Placeholder = () => {
  return (
    <div className="placeholder">
      <FontAwesomeIcon icon={faExclamationCircle} size="7x" />
      <h1>No drinks found for that combination, try something else!</h1>
    </div>
  );
};

export default Placeholder;
