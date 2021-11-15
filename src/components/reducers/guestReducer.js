import { TOGGLE_EDITING, UPDATE_EVENT } from "../actions/guestActions";

export const initialState = {
    firstName: "First Name",
    title: "Potluck Title",
    location: "Location",
    date: "MM/DD/YY",
    description: "Description Description Description",
    guests: [],
    editing: false,
};

const guestReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_EVENT:
        return {
          ...state,
          title: action.payload,
          editing: false
        };
      case TOGGLE_EDITING:
        return {
          ...state,
          editing: !state.editing
        };
      default:
        return state;
    }
  };
  
  export default guestReducer;