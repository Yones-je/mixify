import React, { useState } from "react";
import { Nav, Cabinet, Showcase, Trending, Placeholder } from "./components";
import "./style/app.scss";

const App = () => {
    const [drinkList, setDrinkList] = useState([]);
    const [show, setShow] = useState(false);

    return (
        <div className='App'>
            <Nav setShow={setShow} show={show} />
            <Cabinet setDrinkList={setDrinkList} setShow={setShow} />
            {show ? (
                <div className='showcase__container'>
                    <Trending show={show} />
                </div>
            ) : (
                <div className='showcase__container'>
                    {drinkList && drinkList !== "None" ? (
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
