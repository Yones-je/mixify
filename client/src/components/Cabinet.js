import React, { useState } from 'react';
import CabinetForm from './CabinetForm';
import CabinetItem from './CabinetItem';
import { getSuggestions, requestFormatter } from '../util';

const Cabinet = ({ openCabinet, setDrinkList, setOpenCabinet }) => {
  const [items, setItems] = useState([]);
  const [nonAlcoholic, setNonAlcoholic] = useState(false);

  const onSubmit = item => {
    setItems([...items, item]);
  };

  const onDelete = id => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  const onSelect = id => {
    setItems(
      items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            selected: !item.selected,
          };
        }
        return item;
      })
    );
  };

  const clearChecked = () => {
    setItems(
      items.map(item => {
        return {
          ...item,
          selected: false,
        };
      })
    );
  };

  const clickHandler = async () => {
    if (items.length < 1) return;
    const ingredientList = requestFormatter(items, nonAlcoholic);
    const drinkList = await getSuggestions(ingredientList);
    if (drinkList === 'None Found') {
      setDrinkList('None');
    } else {
      setDrinkList(drinkList);
    }
    setNonAlcoholic(false);
    clearChecked();
    setOpenCabinet(!openCabinet);
  };

  return (
    <aside className={`cabinet ${openCabinet ? 'cabinet--active' : ''}`}>
      <h2>Your Cabinet</h2>
      <CabinetForm onSubmit={item => onSubmit(item)} />
      <ul className="cabinet__list-container">
        {items.map(item => (
          <CabinetItem
            key={item.id}
            item={item}
            onSelect={onSelect}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <div className="cabinet__button-container">
        <label>
          Non Alcoholic
          <input
            type="checkbox"
            onClick={() => setNonAlcoholic(!nonAlcoholic)}
            checked={nonAlcoholic}
            readOnly
          />
        </label>
        <button onClick={clickHandler}>Mixify!</button>
      </div>
    </aside>
  );
};

export default Cabinet;
