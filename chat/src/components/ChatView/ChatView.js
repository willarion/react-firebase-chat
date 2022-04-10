import { InputMessage } from "../InputMessage";
import { db } from "../../firebase";
import { useEffect, useRef, useState } from "react";
import { Message } from "../Message";
import { ChatViewMessages, ChatViewWrap } from "./ChatView.styled";

export const ChatView = () => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  const handleScroll = () =>
    scroll.current.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setMessages(data);
      });
  }, []);

  useEffect(() => {
    handleScroll();
  }, [messages]);

  return (
    <ChatViewWrap>
      <ChatViewMessages>
        {messages.length > 0 &&
          messages.map(({ id, text, username, uid, timestamp }) => {
            return (
              <Message
                key={id}
                id={id}
                username={username}
                text={text}
                uid={uid}
                timestamp={timestamp && timestamp.toDate()}
              />
            );
          })}
        <div ref={scroll} />
      </ChatViewMessages>
      <InputMessage />
    </ChatViewWrap>
  );
};
