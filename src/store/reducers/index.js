import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import inventoryReducer from "./inventoryReducer";
import userReducer from "./userReducer";

const cartPersistConfig = {
  key: "cart",
  storage,
};

const inventoryPersistConfig = {
  key: "inventory",
  storage,
};

const userPersistConfig = {
  key: "user",
  storage,
};

const rootReducer = combineReducers({
  cart: persistReducer(cartPersistConfig, cartReducer),
  inventory: persistReducer(inventoryPersistConfig, inventoryReducer),
  user: persistReducer(userPersistConfig, userReducer)
});

export default rootReducer;
