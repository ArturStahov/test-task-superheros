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

export default function HeroPreviewsList({
  itemHero: { name, description, images },
}) {
  return (
    <Container>
      <ImageWrapper>
        <ImageMask />
        <Image src={images} alt={name} />
      </ImageWrapper>

      <ContentWrapper>
        <Title> {name}</Title>
        <Text>About Hero: {description}</Text>
      </ContentWrapper>
    </Container>
  );
}

HeroPreviewsList.propTypes = {
  itemHero: PropTypes.object,
};
