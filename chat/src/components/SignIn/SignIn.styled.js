import styled from "styled-components";

export const SignInStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60vh;
  align-content: center;
`;

export const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 15px;
`;

export const SignInSpan = styled.span`
  text-align: center;
`;

export const SignInHeader = styled(SignInSpan)`
  font-size: 1.5em;
`;

export const SignInActionSpan = styled.span`
  color: #1976d2;
  cursor: pointer;
`;
