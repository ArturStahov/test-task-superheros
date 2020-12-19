import maskImage from '../../images/mask_bg.png';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  margin-right: 20px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ContentWrapper = styled.div`
  padding-top: 20px;
  max-width: 400px;
`;
const Title = styled.h2`
  font-size: 3.8rem;
  font-family: 'Bangers';
  font-weight: 400;
  color: #ffbf00;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #9a3535;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
const SubTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: #c03737;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
const ImageMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${maskImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

export {
  ImageMask,
  Text,
  SubTitle,
  Title,
  ContentWrapper,
  Image,
  ImageWrapper,
  Container,
};