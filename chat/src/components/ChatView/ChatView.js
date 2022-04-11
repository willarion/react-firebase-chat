import { InputMessage } from "../InputMessage";
import { useEffect, useRef } from "react";
import { Message } from "../Message";
import { ChatViewMessages, ChatViewWrap } from "./ChatView.styled";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../store/actions/messages";
import { Loader } from "../Loader";

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
        {fetching && <Loader />}
        {messages.length > 0 &&
          messages.map(({ id, message, username, uid, timestamp }) => {
            return (
              <Message
                key={id}
                id={id}
                username={username}
                text={message}
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
