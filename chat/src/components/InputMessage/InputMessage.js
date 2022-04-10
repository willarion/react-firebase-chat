import { TextField, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import { InputMessageStyledForm } from "./InputMessage.styled";
import { useSendMessage } from "./useSendMessage";

export const InputMessage = () => {
  const { sendMessage, handleChange, message, disableSend, inputRef } =
    useSendMessage();

  return (
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
      <Tooltip title="Or press Ctrl+Enter">
        <Button type="submit" disabled={disableSend}>
          Send
        </Button>
      </Tooltip>
    </InputMessageStyledForm>
  );
};
