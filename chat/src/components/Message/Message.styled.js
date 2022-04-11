import styled from "styled-components";
import Button from "@mui/material/Button";

export const MessageWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: space-between;
  border: 1px solid lightgrey;
  border-radius: 15px;
  padding: 10px;
  width: 70%;
  align-self: ${({ sent }) => (sent ? "flex-end" : "flex-start")};
`;

export const MessageStyled = styled.div`
  color: grey;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const MessageText = styled.span`
  max-width: 55%;
  display: block;
  word-break: break-word;
`;

export const MessageUserName = styled(MessageText)`
  color: ${({ color }) => (color ? color : "inherit")};
  max-width: 55%;
  display: block;
  word-break: break-word;
`;

export const TimeDisplay = styled(MessageText)`
  font-size: 0.75rem;
  align-self: flex-end;
  color: #1f4eb2a5;
`;

export const SendButton = styled(Button)`
  height: 100%;
`;
