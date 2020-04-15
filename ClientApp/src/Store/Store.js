import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { connectRouter } from "connected-react-router";
import rootReducer from "./RootReducer";
import * as sagas from "./Index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  connectRouter(rootReducer),
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

Object.values(sagas).forEach((element) => {
  sagaMiddleware.run(element);
});

export default store;
