import firebase from "firebase/compat/app";
import { useState } from "react";
import { auth, db } from "../../firebase";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { InputMessageStyledForm } from "./InputMessage.styled";

export const InputMessage = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  async function sendMessage(e) {
    e.preventDefault();

    const { uid, photoURL, displayName } = auth.currentUser;

    await db.collection("messages").add({
      text: message,
      username: displayName,
      photoURL,
      uid,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessage("");
  }

  return (
    <InputMessageStyledForm onSubmit={sendMessage}>
      <TextField
        fullWidth={true}
        placeholder="Message..."
        type="text"
        value={message}
        onChange={handleChange}
        multiline
        maxRows={3}
      />
      <Button type="submit" disabled={message.trim().length === 0}>
        Send
      </Button>
    </InputMessageStyledForm>
  );
};
