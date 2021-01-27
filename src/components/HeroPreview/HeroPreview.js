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
import Rating from './Raiting/Raiting';
import RatingView from '../RaitingView/RaitingView';
import Likes from './Likes/Likes';

export default function HeroPreview({
  itemHero: { name, descriptions, webImageUrl, serverId },
}) {
  return (
    <Container>
      <RatingView serverId={serverId} />
      <ImageWrapper>
        <ImageMask />
        <Image src={webImageUrl} alt={name} />
      </ImageWrapper>

      <ContentWrapper>
        <Title> {name}</Title>
        <Text>About Hero: {descriptions}</Text>
      </ContentWrapper>

      <Comments serverId={serverId} />
      <Rating serverId={serverId} size="large" />
      <Likes serverId={serverId} />
    </Container>
  );
}

HeroPreview.propTypes = {
  itemHero: PropTypes.object,
};
