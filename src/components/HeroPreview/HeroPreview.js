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
import Comments from './Comments/Comments';

export default function HeroPreview({
  itemHero: { name, descriptions, webImageUrl, serverId },
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

      <Comments serverId={serverId} />
    </Container>
  );
}

HeroPreview.propTypes = {
  itemHero: PropTypes.object,
};
