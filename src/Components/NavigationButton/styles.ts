import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  margin: 15px;
  border: none;
  border-radius: 50%;
  background-color: #000;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;

export const IconContainer = styled.img`
  width: 100%;
`;

export default ButtonContainer;
