import { IconButton } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

export const EmojiPickerButton = ({ onToggle }) => {
  return (
    <IconButton aria-label="emoji" onClick={onToggle}>
      <InsertEmoticonIcon />
    </IconButton>
  );
};
