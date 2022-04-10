import styled from "styled-components";

export const ChatViewWrap = styled.div`
  min-height: 50vh;
  max-height: 80vh;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ChatViewMessages = styled.div`
  overflow-y: scroll;
  max-height: 45vh;
`;
