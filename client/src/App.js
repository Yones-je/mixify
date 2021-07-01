import React, { useState } from 'react';
import { Nav, Cabinet } from './components';
import './App.css';

const App = () => {
  const [openCabinet, setOpenCabinet] = useState(false);
  return (
    <div className="App">
      <Nav openCabinet={openCabinet} setOpenCabinet={setOpenCabinet} />
      <Cabinet openCabinet={openCabinet} />
    </div>
  );
};

export default App;
