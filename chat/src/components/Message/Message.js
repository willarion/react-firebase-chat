import {
  MessageStyled,
  MessageText,
  MessageUserName,
  MessageWrap,
  TimeDisplay,
} from "./Message.styled";
import { auth } from "../../firebase";
import { useMemo } from "react";
import { useTimestamp } from "./hooks/useTimestamp";
import { useUserColor } from "./hooks/useUserColor";
import { EditMessageModal } from "./components/EditMessageModal";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";
import { useToggleModal } from "./components/EditMessageModal/hooks";

export const Message = ({ id, text, username, uid, timestamp }) => {
  const sent = useMemo(() => uid === auth.currentUser.uid, [uid]);
  const userColor = useUserColor(uid, sent);
  const timeAgo = useTimestamp(timestamp);

  const { toggleEditModal, openModal } = useToggleModal();

  const handleTooltipClick = () => sent && toggleEditModal();

  return (
    <MessageWrap sent={sent}>
      <MessageStyled>
        <MessageUserName color={userColor}>
          {username ? username : "Anonymous"}:
        </MessageUserName>
        <Tooltip
          onClick={handleTooltipClick}
          title={
            sent ? (
              <span>
                <EditIcon color="white" fontSize="inherit" />
                Click on message text to edit it
              </span>
            ) : (
              ""
            )
          }
        >
          <MessageText>{text}</MessageText>
        </Tooltip>
      </MessageStyled>
      <TimeDisplay>{timeAgo}</TimeDisplay>
      {openModal && (
        <EditMessageModal
          id={id}
          initialMessage={text}
          toggleModal={toggleEditModal}
        />
      )}
    </MessageWrap>
  );
};
