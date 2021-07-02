import React, { useState, useEffect } from 'react';
import Card from './Card';
import { getTrending } from '../util';

const Trending = ({ show }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (show) {
      const getData = async () => {
        const trending = await getTrending();
        setData(trending);
      };
      getData();
    }
  }, [show]);
  return (
    <div>
      <ul className="drinklist">
        {show && data.length > 0
          ? data.map(drink => <Card drink={drink} key={drink.idDrink} />)
          : ''}
      </ul>
    </div>
  );
};

export default Trending;
