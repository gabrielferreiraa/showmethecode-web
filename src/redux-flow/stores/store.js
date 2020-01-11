import { createStore, compose, applyMiddleware } from "redux"
import { createBrowserHistory } from "history"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import createSagaMiddleware from "redux-saga"
import { routerMiddleware } from "connected-react-router"

import rootReducer from "redux-flow/reducers/root-reducer"
import rootSaga from "redux-flow/reducers/root-saga"

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()
const persistConfig = {
  key: "@showmethecode",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer(history))

const devTools =
  !!window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(routerMiddleware(history), sagaMiddleware), devTools)
)

sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)

export default store
