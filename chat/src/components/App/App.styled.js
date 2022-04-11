import styled from "styled-components";

export const AppWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
  box-sizing: border-box;
`;

export const AppMain = styled.main`
  align-self: center;
  max-width: 450px;
  width: 50%;
  box-shadow: -8px 9px 6px 0 rgb(136 136 136 / 50%);
  border: 0.1px solid lightgrey;
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    width: 85%;
  }
`;
