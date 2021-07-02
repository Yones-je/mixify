import React, { useEffect, useState } from 'react';
import { getDrink } from '../util';

const Card = ({ drink }) => {
  const [clicked, setClicked] = useState(false);
  const [drinkInfo, setDrinkInfo] = useState('');
  const [ingredientList, setIngredientList] = useState([]);
  const [measureList, setMeasureList] = useState([]);

  const handleClick = async id => {
    setClicked(!clicked);
    const drink = await getDrink(id);
    setDrinkInfo(drink[0]);
  };

  useEffect(() => {
    if (drinkInfo.length === 0) return;
    let ingredients = [];
    let measures = [];
    for (const [key, value] of Object.entries(drinkInfo)) {
      if (/ingredient/gi.test(key) && value !== null) {
        ingredients.push(value);
      }
      if (/measure/gi.test(key) && value !== null) {
        measures.push(value);
      }
    }
    setIngredientList(ingredients);
    setMeasureList(measures);
  }, [drinkInfo]);

  return (
    <li className="drinklist__card">
      <div className="card__container">
        <div className="card__image-container">
          <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        </div>
        <div className="card__text-container">
          <h3>{drink.strDrink}</h3>
          <button onClick={() => handleClick(drink.idDrink)}>DETAILS</button>
        </div>
        {clicked ? (
          <div className={`card__infotext ${clicked ? '--active' : ''}`}>
            <ul className="card__infolist">
              Ingredients:
              {ingredientList &&
                ingredientList.map((ingredient, index) => (
                  <li className="card__listitem" key={index}>
                    {`${
                      measureList[index] !== undefined ? measureList[index] : ''
                    } ${ingredient.trim()}`}
                  </li>
                ))}
            </ul>
            <br />
            <p>{drinkInfo.strInstructions}</p>
          </div>
        ) : (
          ''
        )}
      </div>
    </li>
  );
};

export default Card;
