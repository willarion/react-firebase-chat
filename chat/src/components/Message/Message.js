import { auth } from "../../firebase";
import { MessageStyled, MessageText } from "./Message.styled";

export const Message = ({ id, text, username, uid }) => {
  return (
    <MessageStyled key={id} sent={uid === auth.currentUser.uid}>
      <MessageText>{username}:</MessageText>
      <MessageText>{text}</MessageText>
    </MessageStyled>
  );
};
