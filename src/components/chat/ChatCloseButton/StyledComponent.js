import styled from 'styled-components';

const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;

  border-radius: 50%;
  z-index: 99;
  transition: transform 0.4s ease-in-out;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transform: rotateZ(90deg);
  }
`;

export { ButtonClose };
