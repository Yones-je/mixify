import React from 'react';

const CabinetItem = ({ item, onSelect, onDelete }) => {
  const handleChecked = id => onSelect(id);

  const handleClick = id => onDelete(id);

  return (
    <article>
      <li className="cabinet__list-item">
        <input
          type="checkbox"
          onClick={() => handleChecked(item.id)}
          checked={item.selected}
          readOnly
        />
        <p>{item.name}</p>
        <button onClick={() => handleClick(item.id)}>✕</button>
      </li>
    </article>
  );
};

export default CabinetItem;
