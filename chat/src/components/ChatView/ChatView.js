import { Message } from "../Message";
import { auth, db } from "../../firebase";
import { useEffect, useRef, useState } from "react";

export const ChatView = () => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(20)
      .onSnapshot((snapshot) => {
        console.log(123);
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  console.log(messages);

  return (
    <div>
      123
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <Message scroll={scroll} />
      <div ref={scroll} />
    </div>
  );
};
