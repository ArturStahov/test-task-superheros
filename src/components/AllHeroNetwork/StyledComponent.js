import styled from 'styled-components';

const List = styled.ul`
  padding: 30px;
  max-height: 500px;
  overflow-y: scroll;
  display: flex;
  width: 90%;
  margin: 0 auto 40px;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: #1e1e24;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffaa00;
  }
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto 40px;
  }
`;

const Item = styled.li`
  position: relative;
  width: 70px;
  height: 50px;
  border-radius: 1rem;
  transition-property: transform, box-shadow;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    box-shadow: 4px 5px 16px 4px rgba(54, 187, 255, 0.69);
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-right: 0px;
      margin-bottom: 10px;
    }
  }
`;

const Images = styled.img`
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
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

export { Overlay, Images, Item, List };
