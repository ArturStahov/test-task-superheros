import styled from 'styled-components';

const LoaderWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 100px;
  margin-right: 20px;
  & > input {
    display: none;
  }
`;
const ImgPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const TitlePreview = styled.h3`
  position: absolute;
  left: 50%;
  bottom: -20px;
  transform: translateX(-50%);
  font-size: 1.6rem;
  color: #ffffff;
`;
const Label = styled.label`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export { LoaderWrapper, ImgPreview, TitlePreview, Label };
