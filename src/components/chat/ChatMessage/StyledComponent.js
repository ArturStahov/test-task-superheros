import styled from 'styled-components';

const MessageWrapper = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: ${props => (props.isUserMsg ? 'row-reverse' : 'row')};
  margin-bottom: 12px;
`;
const TextName = styled.p`
  line-height: 24px;
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  color: #b6b6b6;
  font-weight: 600;
`;
const TextUser = styled.p`
  width: max-content;
  line-height: 24px;
  padding: 10px 20px;
  border-radius: 25px;
  position: relative;
  color: white;
  text-align: center;
  color: white;
  background: #0b93f6;
  align-self: flex-end;
`;
const TextNetwork = styled.p`
  line-height: 24px;
  padding: 10px 20px;
  border-radius: 25px;
  position: relative;
  color: white;
  text-align: center;
  background: #e5e5ea;
  color: black;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 2px 5px;
`;

export { MessageWrapper, Avatar, TextUser, TextNetwork, TextName };
