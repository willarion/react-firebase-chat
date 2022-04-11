import {
  MessageStyled,
  MessageText,
  MessageUserName,
  MessageWrap,
  TimeDisplay,
} from "./Message.styled";
import { auth } from "../../firebase";
import { useMemo } from "react";
import { useTimestamp } from "./useTimestamp";
import { useUserColor } from "./useUserColor";

export const Message = ({ id, text, username, uid, timestamp }) => {
  const sent = useMemo(() => uid === auth.currentUser.uid, [uid]);
  const userColor = useUserColor(uid, sent);
  const timeAgo = useTimestamp(timestamp);

  const handleEdit = () => {};

  return (
    <MessageWrap onClick={handleEdit} sent={sent}>
      <MessageStyled>
        <MessageUserName color={userColor}>
          {username ? username : "Anonymous"}:
        </MessageUserName>
        <MessageText>{text}</MessageText>
      </MessageStyled>
      <TimeDisplay>{timeAgo}</TimeDisplay>
    </MessageWrap>
  );
};
