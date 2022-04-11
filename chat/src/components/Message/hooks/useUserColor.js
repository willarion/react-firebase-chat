import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserColor } from "../../../helpers";

export const useUserColor = (uid, sendStatus) => {
  const [userColor, setUserColor] = useState("grey");
  const { color } = useSelector((state) => state.user);

  useEffect(() => {
    if (sendStatus) {
      setUserColor(color);
    } else {
      getUserColor(uid).then((doc) => setUserColor(doc.data()?.color));
    }
  }, [color, sendStatus, uid]);

  return userColor;
};
