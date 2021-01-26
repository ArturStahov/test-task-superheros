import styled, { keyframes } from 'styled-components';
import { rollIn, rollOut } from 'react-animations';
import bgMask from '../../images/bg/bg-modal.png';

const animIn = keyframes`${rollIn}`;
const animOut = keyframes`${rollOut}`;

const Modal = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99;
`;
const ContentBlock = styled.div`
  position: relative;
  width: 70%;
  height: 70%;
  max-width: 900px;
  background: url(${bgMask}) no-repeat right bottom / 30% #333447;
  border-radius: 1rem;
  transition-property: opacity;
  transition-delay: 0.3s;
  &.open {
    animation: 1s ${animIn};
  }
  &.close {
    animation: 0.6s ${animOut};
  }
  @media screen and (max-width: 767px) {
    width: 90%;
    height: 90%;
    background: url(${bgMask}) no-repeat right bottom / 50% #333447;
  }
`;
const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: 2px solid grey;
  border-radius: 50%;
  z-index: 99;
  transition: transform 0.4s ease-in-out;
  outline: none;
  cursor: pointer;
  &:hover {
    transform: rotateZ(90deg);
  }
`;

export { Modal, ContentBlock, ButtonClose };
