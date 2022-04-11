import { db } from "../firebase";

export const getUserColor = (userId) => {
  return db.collection("userColors").doc(userId).get();
};
