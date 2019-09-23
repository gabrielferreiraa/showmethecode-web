import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from 'history'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router'

import rootReducer from 'redux-flow/reducers/root-reducer';
import rootSaga from 'redux-flow/reducers/root-saga';
import global from 'config/global';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer(history)
);

const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        ),
        global.devTools,
    )
);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

export default store;
