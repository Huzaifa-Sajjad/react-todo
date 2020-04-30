import { combineReducers } from "redux";

import groceryList from "./groceryList";
import cart from "./cart";

export default combineReducers({ groceryList, cart });
