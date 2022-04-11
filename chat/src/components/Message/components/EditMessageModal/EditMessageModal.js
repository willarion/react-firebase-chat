import { Portal } from "../../../Portal";
import {
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalWrap,
} from "./EditMessageModal.styled";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { db } from "../../../../firebase";

export const EditMessageModal = ({ id, initialMessage, toggleModal }) => {
  const [editedMessage, setEditedMessage] = useState(initialMessage);

  const handleChange = (e) => {
    setEditedMessage(e.target.value);
  };

  const handleEditMessage = (e) => {
    e.preventDefault();
    const messageRef = db.collection("messages").doc(id);

    return messageRef
      .update({
        text: editedMessage,
      })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      })
      .finally(() => toggleModal());
  };

  return (
    <Portal>
      <ModalWrap>
        <ModalContainer>
          <ModalHeader>
            <span>Please, enter new message</span>
          </ModalHeader>
          <TextField
            fullWidth={true}
            placeholder="Message..."
            type="text"
            value={editedMessage}
            onChange={handleChange}
            multiline
            maxRows={3}
          />
          <ModalFooter>
            <Button type="submit" onClick={handleEditMessage}>
              Ok
            </Button>
            <Button type="reset" onClick={toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContainer>
      </ModalWrap>
    </Portal>
  );
};
