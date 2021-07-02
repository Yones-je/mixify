import React, { useState } from 'react';
import { Nav, Cabinet, Showcase, Trending, Placeholder } from './components';
import './style/app.scss';

const App = () => {
  const [openCabinet, setOpenCabinet] = useState(false);
  const [drinkList, setDrinkList] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Nav
        openCabinet={openCabinet}
        setOpenCabinet={setOpenCabinet}
        setShow={setShow}
        show={show}
      />
      <Cabinet
        openCabinet={openCabinet}
        setDrinkList={setDrinkList}
        setShow={setShow}
        setOpenCabinet={setOpenCabinet}
      />
      {show ? (
        <div className="showcase__container">
          <Trending show={show} />
        </div>
      ) : (
        <div className="showcase__container">
          {drinkList && drinkList !== 'None' ? (
            <Showcase drinkList={drinkList} />
          ) : (
            <Placeholder />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
