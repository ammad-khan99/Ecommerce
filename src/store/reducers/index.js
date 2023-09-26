import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const customerPersistConfig = {
    key: "cart",
    storage,
  };

const rootReducer = combineReducers({
    cart: persistReducer(customerPersistConfig, cartReducer),
})

export default rootReducer;