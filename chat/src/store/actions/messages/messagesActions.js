import { db } from "../../../firebase";
import {
  MESSAGES_CALL_FETCH,
  MESSAGES_CALL_SUCCESS,
} from "./messagesActionsTypes";

export const getMessages = () => {
  return async (dispatch) => {
    dispatch({ type: MESSAGES_CALL_FETCH });

    return db
      .collection("messages")
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        const messages = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        dispatch({ type: MESSAGES_CALL_SUCCESS, messages });
      });
  };
};
