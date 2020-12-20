import PropTypes from 'prop-types';
import {
  ImageMask,
  Text,
  SubTitle,
  Title,
  ContentWrapper,
  Image,
  ImageWrapper,
  Container,
} from './StyledComponent';

//create preview hero content in Modal window
export default function HeroPreviewsList({
  itemHero: {
    nickName,
    realName,
    description,
    superPowers,
    catchPhrase,
    images,
  },
}) {
  return (
    <Container>
      <ImageWrapper>
        <ImageMask />
        <Image src={images} alt={nickName} />
      </ImageWrapper>

      <ContentWrapper>
        <Title> {nickName}</Title>
        <SubTitle>Real name: {realName}</SubTitle>
        <Text>Catch Phrase: {catchPhrase}</Text>
        <Text>Super Powers: {superPowers}</Text>
        <Text>About Hero: {description}</Text>
      </ContentWrapper>
    </Container>
  );
}

HeroPreviewsList.propTypes = {
  itemHero: PropTypes.object.isRequired,
};
