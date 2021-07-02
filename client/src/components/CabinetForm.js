import React, { useState } from 'react';
import uuid from 'react-uuid';

const CabinetForm = ({ onSubmit }) => {
  const [item, setItem] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (item === '') return;
    onSubmit({ name: item, id: uuid(), selected: false });
    setItem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="Text"
        name="item"
        placeholder="Add an item here"
        value={item}
        onChange={e => setItem(e.target.value)}
      />
      <input className="form__button" type="submit" value="Add" />
    </form>
  );
};

export default CabinetForm;
