import rootReducer from "./reducers";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from 'redux-persist'
import thunk from "redux-thunk";

const middleware = applyMiddleware(logger,thunk)

const store = createStore(
    rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  middleware

);

export const persistor = persistStore(store)

export default store;