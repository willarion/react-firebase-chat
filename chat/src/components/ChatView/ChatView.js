import { InputMessage } from "../InputMessage";
import { db } from "../../firebase";
import { useEffect, useRef, useState } from "react";
import { Message } from "../Message";
import { ChatViewMessages, ChatViewWrap } from "./ChatView.styled";
import moment from "moment";

export const ChatView = () => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  const handleScroll = () =>
    scroll.current.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      });
  }, []);

  useEffect(() => {
    handleScroll();
  }, [messages]);

  // console.log(messages[messages.length - 1].timestamp.toDate());

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
                timestamp={timestamp && moment(timestamp.toDate()).fromNow()}
              />
            );
          })}
        <div ref={scroll} />
      </ChatViewMessages>
      <InputMessage />
    </ChatViewWrap>
  );
};
