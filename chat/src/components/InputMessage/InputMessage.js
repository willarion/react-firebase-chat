import { TextField, Tooltip } from "@mui/material";
import { InputMessageStyledForm } from "./InputMessage.styled";
import { useSendMessage } from "./hooks";
import { SendButton } from "../Message/Message.styled";
import { useShowEmoji } from "../EmojiPicker/hooks";
import { EmojiPicker, EmojiPickerButton } from "../EmojiPicker";

export const InputMessage = () => {
  const {
    sendMessage,
    handleChange,
    message,
    disableSend,
    inputRef,
    handleEmojiClick,
  } = useSendMessage();

  const { toggleShowEmoji, showEmoji } = useShowEmoji();

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
        <EmojiPickerButton onToggle={toggleShowEmoji} />
        <Tooltip title={disableSend ? "" : "Or press Ctrl+Enter"}>
          <span>
            <SendButton type="submit" disabled={disableSend}>
              Send
            </SendButton>
          </span>
        </Tooltip>
      </InputMessageStyledForm>
      <EmojiPicker show={showEmoji} onEmojiClick={handleEmojiClick} />
    </>
  );
};
