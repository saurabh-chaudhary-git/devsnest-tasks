import { updateFirstName, updateLastName } from "./actionType";

const initialState = {
  firstName: "",
  lastname: ""
};
export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case updateFirstName:
      return {
        ...state,
        firstName: action.payload
      };
    case updateLastName:
      return {
        ...state,
        lastName: action.payload
      };
    default:
      return state;
  }
};
