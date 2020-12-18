import styled from 'styled-components';

const Footer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 50px 0px 50px;
  background-color: #1b1f28;
`;
const Copyright = styled.p`
  font-size: 1.4rem;
  color: rgba(202, 228, 225, 0.98);
  text-align: center;
`;

export default function Footers() {
  return (
    <Footer>
      <Copyright>Artur Stakhov 2020</Copyright>
    </Footer>
  );
}
