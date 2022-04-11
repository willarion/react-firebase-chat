import styled from "styled-components";

export const EmojiPickerStyled = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  z-index: 9999;
  top: 5%;
  width: 100%;

  & aside.emoji-picker-react {
    margin: auto;
    max-width: 320px;
    width: unset;
    max-height: 40vh;

    @media screen and (max-width: 360px) {
      width: 280px;
    }
  }
`;
