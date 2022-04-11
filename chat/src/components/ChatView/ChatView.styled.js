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
  position: relative;
`;

export const ChatViewMessages = styled.div`
  overflow-y: scroll;
  height: 100%;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 5px 5px 0;
`;
