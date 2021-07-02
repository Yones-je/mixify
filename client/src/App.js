import React, { useState } from 'react';
import { Nav, Cabinet, Showcase } from './components';
import './style/app.scss';

const App = () => {
  const [openCabinet, setOpenCabinet] = useState(false);
  const [drinkList, setDrinkList] = useState([]);

  return (
    <div className="App">
      <Nav openCabinet={openCabinet} setOpenCabinet={setOpenCabinet} />
      <Cabinet
        openCabinet={openCabinet}
        setDrinkList={setDrinkList}
        setOpenCabinet={setOpenCabinet}
      />
      <div className="showcase__container">
        {drinkList !== 'None' ? (
          <Showcase drinkList={drinkList} />
        ) : (
          'No drinks found for that combination, try something else!'
        )}
      </div>
    </div>
  );
};

export default App;

/* drinkList.map(drink => (
  <Showcase key={drink.idDrink} drink={drink} />
)) */
