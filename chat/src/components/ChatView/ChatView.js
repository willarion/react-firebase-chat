import { InputMessage } from "../InputMessage";
import { useEffect, useRef } from "react";
import { Message } from "../Message";
import { ChatViewMessages, ChatViewWrap } from "./ChatView.styled";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../store/actions/messages";

export const ChatView = () => {
  const dispatch = useDispatch();

  const scroll = useRef();
  const { messages, fetching } = useSelector((state) => state.messages);

  const handleScroll = () =>
    scroll.current.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    handleScroll();
  }, [messages]);

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  return (
    <ChatViewWrap>
      <ChatViewMessages>
        {fetching && <p>Fetching...</p>}
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
