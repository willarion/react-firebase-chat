import styled from "styled-components";

export const ChatViewWrap = styled.div`
  height: 100%;
  box-sizing: border-box;
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
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;
