import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import configStore from "./store/configStore";

const store = configStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("container")
);
