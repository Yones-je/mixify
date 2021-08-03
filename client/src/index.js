import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { cabinetStore } from "./redux/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={cabinetStore}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
