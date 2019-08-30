import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_USER
} from "../actions/session_actions";
import { bindActionCreators } from "redux";

const errorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_USER:
      return [];
    default:
      return state;
  }
};

export default errorsReducer;
