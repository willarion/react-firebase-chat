import firebase from "firebase/compat/app";
import { useState } from "react";
import { auth, db } from "../../firebase";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";

export const Message = ({ scroll }) => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            placeholder="Message..."
            type="text"
            value={message}
            onChange={handleChange}
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
};
