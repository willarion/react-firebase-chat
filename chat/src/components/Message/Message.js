import {
  MessageStyled,
  MessageText,
  MessageWrap,
  TimeDisplay,
} from "./Message.styled";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import moment from "moment";

export const Message = ({ id, text, username, uid, timestamp }) => {
  const [timeAgo, setTimeAgo] = useState(timestamp ? "" : "just now");

  useEffect(() => {
    if (timestamp) {
      const intervalTime = setInterval(() => {
        setTimeAgo(moment(timestamp).fromNow());
      }, 1000);

      return () => clearInterval(intervalTime);
    }
  }, [timeAgo, timestamp]);

  return (
    <MessageWrap>
      <MessageStyled key={id} sent={uid === auth.currentUser.uid}>
        <MessageText>{username ? username : "Anonymous"}:</MessageText>
        <MessageText>{text}</MessageText>
      </MessageStyled>
      <TimeDisplay>{timeAgo}</TimeDisplay>
    </MessageWrap>
  );
};
