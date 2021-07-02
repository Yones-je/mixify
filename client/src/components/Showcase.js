import React from 'react';
import Card from './Card';
/* import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'; */

const Showcase = ({ drinkList }) => {
  return (
    <ul className="drinklist">
      {drinkList.map(drink => (
        <Card drink={drink} key={drink.idDrink} />
      ))}
    </ul>
  );
};

export default Showcase;
