import styled from "styled-components";

export const AppWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AppHeader = styled.header`
  position: absolute;
  top: 0;
  padding: 20px;
`;

export const AppMain = styled.main`
  align-self: center;
  width: 50%;
  box-shadow: 0 0 11px 5px rgba(136, 136, 136, 0.5);
`;
