import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import inventoryReducer from "./inventoryReducer";

const cartPersistConfig = {
  key: "cart",
  storage,
};

const inventoryPersistConfig = {
  key: "inventory",
  storage,
};

const rootReducer = combineReducers({
  cart: persistReducer(cartPersistConfig, cartReducer),
  inventory: persistReducer(inventoryPersistConfig, inventoryReducer),
});

export default rootReducer;
