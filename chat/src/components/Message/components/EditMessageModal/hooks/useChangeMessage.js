import { useCallback, useState } from "react";

export const useChangeMessage = (initialMessage) => {
  const [editedMessage, setEditedMessage] = useState(initialMessage);

  const handleChange = (e) => {
    setEditedMessage(e.target.value);
  };

  const handleEmojiClick = useCallback((event, emojiObject) => {
    setEditedMessage((prevState) => prevState + emojiObject.emoji);
  }, []);

  return { editedMessage, handleChange, handleEmojiClick };
};
