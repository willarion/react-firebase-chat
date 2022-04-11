import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { auth, db } from "../../../firebase";
import firebase from "firebase/compat/app";

export const useSendMessage = () => {
  const inputRef = useRef();
  const [message, setMessage] = useState("");

  const disableSend = useMemo(() => message.trim().length === 0, [message]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = useCallback(
    async (e) => {
      e.preventDefault();

      if (disableSend) {
        return;
      }

      setMessage("");

      const { uid, displayName } = auth.currentUser;

      await db
        .collection("messages")
        .add({
          message,
          username: displayName ? displayName : "Anonymous",
          uid,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => inputRef.current.focus());
    },
    [disableSend, message]
  );

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Enter" && e.ctrlKey) {
        e.preventDefault();

        sendMessage(e);
      }
    };
    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [sendMessage]);

  const handleEmojiClick = useCallback((event, emojiObject) => {
    setMessage((prevState) => prevState + emojiObject.emoji);
  }, []);

  return {
    sendMessage,
    handleChange,
    message,
    disableSend,
    inputRef,
    handleEmojiClick,
  };
};
