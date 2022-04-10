import { IconButton, TextField, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import {
  InputMessagesEmoji,
  InputMessageStyledForm,
} from "./InputMessage.styled";
import { useSendMessage } from "./useSendMessage";
import Picker from "emoji-picker-react";
import { useState } from "react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

export const InputMessage = () => {
  const {
    sendMessage,
    handleChange,
    message,
    disableSend,
    inputRef,
    onEmojiClick,
  } = useSendMessage();

  const [showEmoji, setShowEmoji] = useState(false);
  const toggleShowEmoji = () => setShowEmoji(!showEmoji);

  return (
    <>
      <InputMessageStyledForm onSubmit={sendMessage}>
        <TextField
          inputRef={inputRef}
          fullWidth={true}
          placeholder="Message..."
          type="text"
          value={message}
          onChange={handleChange}
          multiline
          maxRows={3}
        />
        <IconButton aria-label="emoji" onClick={toggleShowEmoji}>
          <InsertEmoticonIcon />
        </IconButton>
        <Tooltip title="Or press Ctrl+Enter">
          <Button type="submit" disabled={disableSend}>
            Send
          </Button>
        </Tooltip>
      </InputMessageStyledForm>
      <InputMessagesEmoji show={showEmoji}>
        <Picker onEmojiClick={onEmojiClick} />
      </InputMessagesEmoji>
    </>
  );
};
