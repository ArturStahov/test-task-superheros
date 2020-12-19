import styled, { keyframes } from 'styled-components';

const neon = keyframes`
    0%{
        box-shadow: 0 0 6px rgba(202, 228, 225, 0.92),
            0 0 20px rgba(202, 228, 225, 0.34), 0 0 12px rgba(30, 132, 242, 0.52),
                0 0 21px rgba(30, 132, 242, 0.92), 0 0 24px rgba(30, 132, 242, 0.78),
                    0 0 34px rgba(30, 132, 242, 0.92);
    }
    100%{
        box-shadow: 0 0 6px rgba(202, 228, 225, 0.98),
            0 0 20px rgba(202, 228, 225, 0.42), 0 0 12px rgba(30, 132, 242, 0.58),
                0 0 12px rgba(30, 132, 242, 0.84), 0 0 28px rgba(30, 132, 242, 0.88),
                    0 0 40px rgba(30, 132, 242, 1);
    }
`;

const Header = styled.header`
  padding: 50px 0px 100px;
`;
const Container = styled.div`
  display: flex;
  max-width: 900px;
  margin: 0 auto;
`;
const LogoWrapper = styled.div`
  width: 200px;
  height: 300px;
  position: relative;
  margin: 0 auto;
  color: #c6e2ff;
  animation: ${neon} 0.08s ease-in-out infinite alternate;
`;
const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Title = styled.h1`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 7.8rem;
  font-family: 'Bangers';
  font-weight: 400;
  color: #ffbf00;
  text-align: center;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #9a3535;
  text-transform: uppercase;
`;

export { Title, LogoImage, LogoWrapper, Header, Container };
