import { auth } from "../../firebase";
import {
  MessageStyled,
  MessageText,
  MessageWrap,
  TimeDisplay,
} from "./Message.styled";

export const Message = ({ id, text, username, uid, timestamp }) => {
  return (
    <MessageWrap>
      <MessageStyled key={id} sent={uid === auth.currentUser.uid}>
        <MessageText>{username}:</MessageText>
        <MessageText>{text}</MessageText>
      </MessageStyled>
      <TimeDisplay>{timestamp}</TimeDisplay>
    </MessageWrap>
  );
};
