import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  left: 2%;
  top: 12%;
  width: 40px;
  height: 40px;
  border: 2px solid #2b2323;
  border-radius: 50%;
  background-color: #bf3030;
  outline: none;
  cursor: pointer;
  transition-property: color, box-shadow;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover,
  :focus {
    box-shadow: 4px 5px 16px 4px rgba(54, 187, 255, 0.69);
  }
  &:hover .icon {
    color: rgba(54, 187, 255, 0.69);
  }
`;

export { Button };
