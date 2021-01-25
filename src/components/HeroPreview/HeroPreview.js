import PropTypes from 'prop-types';
import {
  ImageMask,
  Text,
  Title,
  ContentWrapper,
  Image,
  ImageWrapper,
  Container,
} from './StyledComponent';

export default function HeroPreview({
  itemHero: { name, descriptions, webImageUrl },
}) {
  return (
    <Container>
      <ImageWrapper>
        <ImageMask />
        <Image src={webImageUrl} alt={name} />
      </ImageWrapper>

      <ContentWrapper>
        <Title> {name}</Title>
        <Text>About Hero: {descriptions}</Text>
      </ContentWrapper>
    </Container>
  );
}

HeroPreview.propTypes = {
  itemHero: PropTypes.object,
};
