import rootReducer from "./reducers";
import { createStore } from "redux";
import { persistStore } from 'redux-persist'
  
const store = createStore(
    rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store)

export default store;