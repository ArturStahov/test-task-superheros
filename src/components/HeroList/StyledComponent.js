import styled from 'styled-components';

const List = styled.ul`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
`;

const Item = styled.li`
  position: relative;
  width: 200px;
  height: 250px;
  border-radius: 1rem;
  transition-property: transform, box-shadow;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    box-shadow: 4px 5px 16px 4px rgba(54, 187, 255, 0.69);
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
const Title = styled.h2`
  position: absolute;
  top: -7%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 3.8rem;
  font-family: 'Bangers';
  font-weight: 400;
  color: #ffbf00;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #9a3535;
  text-transform: uppercase;
`;
const Images = styled.img`
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ControlWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  transition: opacity 0.3s ease-in;
`;
const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: #9a3535;
  outline: none;
  border: none;
  border-radius: 1rem;

  cursor: pointer;
  &:hover .icon {
    color: #ffffff;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  filter: grayscale(70%);
  &:hover {
    filter: grayscale(0%);
  }
`;

export { Overlay, Button, ControlWrapper, Images, Title, Item, List };
