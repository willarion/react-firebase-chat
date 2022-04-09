import styled from "styled-components";

export const MessageStyled = styled.div`
  color: ${(props) => (props.sent ? "blue" : "green")};
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
  padding: 10px;
  gap: 10px;
`;

export const MessageText = styled.span`
  max-width: 55%;
  display: block;
  word-break: break-word;
`;
