import { createStore, applyMiddleware, compose } from "redux";
import { devTools, persistState } from 'redux-devtools';
import RootReducer from "../reducers/RootReducer";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import { createHistory } from "history";
import { routerStateReducer, reduxReactRouter } from "redux-router";

const logger = createLogger();
const createAppStore = compose(
    applyMiddleware(thunk, logger),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    reduxReactRouter({createHistory})
)(createStore);

export default function configStore() {
    return createAppStore(RootReducer);
}
