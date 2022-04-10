import { initialState } from "../initialState";
import {
  MESSAGES_CALL_FETCH,
  MESSAGES_CALL_SUCCESS,
} from "../actions/messages";

export const messages = (state = initialState.messages, action) => {
  switch (action.type) {
    case MESSAGES_CALL_FETCH:
      return { ...state, fetching: true };
    case MESSAGES_CALL_SUCCESS:
      return {
        ...state,
        fetching: false,
        messages: action.messages,
      };
    default:
      return state;
  }
};
