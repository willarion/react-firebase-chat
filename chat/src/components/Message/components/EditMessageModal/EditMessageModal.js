import {
  EmojiButtonWrap,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalWrap,
} from "./EditMessageModal.styled";
import { Button, Portal, TextField } from "@mui/material";
import { useChangeMessage } from "./hooks/useChangeMessage";
import { db } from "../../../../firebase";
import { useShowEmoji } from "../../../EmojiPicker/hooks";
import { EmojiPickerButton, EmojiPicker } from "../../../EmojiPicker";

export const EditMessageModal = ({ id, initialMessage, toggleModal }) => {
  const { toggleShowEmoji, showEmoji } = useShowEmoji();
  const { editedMessage, handleChange, handleEmojiClick } =
    useChangeMessage(initialMessage);

  const handleEditedMessageSubmit = (e) => {
    e.preventDefault();

    db.collection("messages")
      .doc(id)
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
          <div>
            <TextField
              fullWidth={true}
              placeholder="Message..."
              type="text"
              value={editedMessage}
              onChange={handleChange}
              multiline
              maxRows={3}
            />
            <EmojiButtonWrap>
              <EmojiPickerButton onToggle={toggleShowEmoji} />
            </EmojiButtonWrap>
          </div>
          <ModalFooter>
            <Button type="submit" onClick={handleEditedMessageSubmit}>
              Save
            </Button>
            <Button type="reset" onClick={toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContainer>
        <EmojiPicker show={showEmoji} onEmojiClick={handleEmojiClick} />
      </ModalWrap>
    </Portal>
  );
};
