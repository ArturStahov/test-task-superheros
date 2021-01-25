import styled from 'styled-components';

const LoaderWrapper = styled.div`
  position: absolute;
  top: -22px;
  left: 21px;
  width: 100px;
  height: 100px;

  & > input {
    display: none;
  }
`;

const AppBlock = styled.div`
  position: fixed;
  top: 20px;
  left: 18px;
  width: 50px;
  height: 50px;
  border: 2px solid #636377;
  border-radius: 50%;
  background-color: transparent;
`;

const UserName = styled.h2`
  max-width: 150px;
  position: absolute;
  bottom: -40px;
  left: 50%;
  font-size: 2rem;
  font-family: 'Bangers';
  color: #ffaa00;
  transform: translateX(-50%);
`;
const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
export { AppBlock, UserName, Avatar, LoaderWrapper };
