import {
  MessageStyled,
  MessageText,
  MessageUserName,
  MessageWrap,
  TimeDisplay,
} from "./Message.styled";
import { auth } from "../../firebase";
import { useMemo, useState } from "react";
import { useTimestamp } from "./useTimestamp";
import { useUserColor } from "./useUserColor";
import { EditMessageModal } from "./components/EditMessageModal";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";

export const Message = ({ id, text, username, uid, timestamp }) => {
  const sent = useMemo(() => uid === auth.currentUser.uid, [uid]);
  const userColor = useUserColor(uid, sent);
  const timeAgo = useTimestamp(timestamp);

  const [openModal, setOpenModal] = useState(false);

  const toggleEditModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <MessageWrap sent={sent}>
      <MessageStyled>
        <MessageUserName color={userColor}>
          {username ? username : "Anonymous"}:
        </MessageUserName>
        <Tooltip
          onClick={toggleEditModal}
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
