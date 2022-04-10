import {
  MessageStyled,
  MessageText,
  MessageWrap,
  TimeDisplay,
} from "./Message.styled";
import { auth } from "../../firebase";
import { useEffect, useMemo, useState } from "react";
import moment from "moment";

export const Message = ({ id, text, username, uid, timestamp }) => {
  const [timeAgo, setTimeAgo] = useState(timestamp ? "" : "just now");

  const sent = useMemo(() => uid === auth.currentUser.uid, [uid]);

  useEffect(() => {
    if (timestamp) {
      const intervalTime = setInterval(() => {
        setTimeAgo(moment(timestamp).fromNow());
      }, 1000);

      return () => clearInterval(intervalTime);
    }
  }, [timeAgo, timestamp]);

  return (
    <MessageWrap sent={sent}>
      <MessageStyled key={id} sent={sent}>
        <MessageText>{username ? username : "Anonymous"}:</MessageText>
        <MessageText>{text}</MessageText>
      </MessageStyled>
      <TimeDisplay>{timeAgo}</TimeDisplay>
    </MessageWrap>
  );
};
