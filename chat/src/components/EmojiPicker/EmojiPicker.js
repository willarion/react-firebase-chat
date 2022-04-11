import { EmojiPickerStyled } from "./EmojiPicker.styled";
import Picker from "emoji-picker-react";

export const EmojiPicker = ({ onEmojiClick, show }) => {
  return (
    <EmojiPickerStyled show={show}>
      <Picker onEmojiClick={onEmojiClick} />
    </EmojiPickerStyled>
  );
};
