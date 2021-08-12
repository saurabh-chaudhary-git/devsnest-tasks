import { createStore } from "redux";
import { formReducer } from "./userForm/formReducer";

const store = createStore(formReducer);

export default store;
