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
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: 5px;
`;
