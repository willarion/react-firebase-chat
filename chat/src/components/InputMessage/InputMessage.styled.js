import styled from "styled-components";

export const InputMessageStyledForm = styled.form`
  width: 100%;
  display: flex;
  padding: 2px;
  box-sizing: border-box;
`;

export const InputMessagesEmoji = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  z-index: 9999;
  top: 5%;
  width: 100%;

  & aside.emoji-picker-react {
    margin: auto;
  }
`;
