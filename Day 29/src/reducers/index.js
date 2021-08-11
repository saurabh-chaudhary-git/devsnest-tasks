import { combineReducers } from "redux";
import placeReducer from "./placeReducer";
import placeDataReducer from "./placeDataReducer";

const rootReducer = combineReducers({
  place: placeReducer,
  placeDate: placeDataReducer
});
export default rootReducer;
