import styled from "styled-components";

export const ModalWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  display: block;
`;

export const ModalContainer = styled.form`
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 70%;
  max-width: 400px;
  height: fit-content;
  padding: 20px 40px;
  text-align: center;
  border-radius: 5px;
`;

export const ModalHeader = styled.div`
  padding-bottom: 20px;
`;

export const ModalFooter = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
`;

export const EmojiButtonWrap = styled.div`
  position: absolute;
  right: 40px;
  bottom: 44%;
`;
