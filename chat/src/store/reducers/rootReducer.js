import { combineReducers } from "redux";
import { user } from "./userReducer";
import { messages } from "./messagesReducer";

export default combineReducers({ user, messages });
