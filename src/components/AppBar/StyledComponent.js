import styled from 'styled-components';

const AppBlock = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  border: 2px solid #636377;
  border-radius: 50%;
  background-color: transparent;
`;

const UserName = styled.h2`
  max-width: 150px;
  position: absolute;
  bottom: -30px;
  left: 50%;
  font-size: 1.4rem;
  color: white;
  transform: translateX(-50%);
`;
const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
export { AppBlock, UserName, Avatar };
